<template>
  <div id='homesection' class='tabsection' style=''>
	  <iframe src='' id='frame' height="100%" width="100%" style="padding: 0px;margin: 0px;animation: page-slide-down 0.2s;z-index: 9;width: 100vw;position: absolute;left: 0;height:100vh;top:0;animation:page-slide-end-left 0.2s ease;" title="Posts"></iframe>
</div>
	<div id='postssection' class='tabsection' style=''>
  <iframe src="/g/general/projects/3/discussions" height="100%" width="100%" style="padding: 0px;margin: 0px;z-index: 9;width: 100vw;position: absolute;left: 0;height:100vh;top:0;animation:page-slide-end-right 0.2s ease;" title="Posts"></iframe>
</div>
<div id='feessection' class='tabsection' style=''>
  <div v-if="tableData.rows.length > 0" class="px-5 py-4" style="animation:page-slide-end-right 0.2s ease">
    <ListView
      :columns="tableData.columns"
      :rows="tableData.rows"
      :options="{
        selectable: false,
        showTooltip: false,
        onRowClick: () => {},
      }"
      row-key="id"
      v-if="tableData.rows.length > 0"
    >
      <ListHeader>
        <ListHeaderItem
          v-for="column in tableData.columns"
          :key="column.key"
          :item="column"
        />
      </ListHeader>
      <ListRow
        v-for="row in tableData.rows"
        :key="row.id"
        :row="row"
        v-slot="{ column, item }"
      >
        <ListRowItem :item="item" :align="column.align">
          <Badge
            v-if="column.key === 'status'"
            variant="subtle"
            :theme="
              row.status === 'Paid' ? (bg_color = 'green') : (bg_color = 'red')
            "
            size="md"
            :label="item"
          />
          <Button
            v-if="column.key === 'cta' && row.status === 'Paid'"
            @click="openInvoicePDF(row)"
            class="hover:bg-gray-900 hover:text-white"
            icon-left="download"
            label="Download Invoice"
          />

          <Button
            v-if="
              column.key === 'cta' &&
              (row.status === 'Unpaid' || row.status === 'Overdue')
            "
            @click="openModal(row)"
            class="hover:bg-gray-900 hover:text-white flex flex-column items-center justify-center"
            icon-left="credit-card"
            label="Pay Now"
          />
        </ListRowItem>
      </ListRow>
    </ListView>
    <FeesPaymentDialog
      v-if="currentRow"
      :row="currentRow"
      :student="studentInfo"
      v-model="showPaymentDialog"
      @success="success()"
    />
  </div>

  <div v-else>
    <MissingData message="No Fees found" />
  </div>
</div>
<div id='schedulesection' class='tabsection' style=''>
  <div class="w-full h-full" style="animation:page-slide-end-right 0.2s ease">
    <Calendar
      v-if="!scheduleResource.loading && scheduleResource.data"
      :events="events"
    />
  </div>
	</div>
</template>
<script setup>
	  import { useRoute } from 'vue-router'
import {
  ListView,
  ListHeader,
  ListHeaderItem,
  ListRow,
  ListRowItem,
  Badge,
  createResource,
  Toast,
  FeatherIcon,
} from 'frappe-ui'
import { reactive, ref } from 'vue'
import FeesPaymentDialog from '@/components/FeesPaymentDialog.vue'
import MissingData from '@/components/MissingData.vue'
import { createToast } from '@/utils'
import Calendar from '@/components/Calendar.vue'
import { studentStore } from '@/stores/student'
const { getCurrentProgram, getStudentGroups } = studentStore()

const programName = ref(getCurrentProgram()?.value?.program)
const studentGroup = ref(getStudentGroups().value)
const events = ref([])

const scheduleResource = createResource({
  url: 'education.education.api.get_course_schedule_for_student',
  params: {
    program_name: programName.value,
    student_groups: studentGroup.value,
  },
  onSuccess: (response) => {
    let schedule = []
    response.forEach((classSchedule) => {
      schedule.push({
        title: classSchedule.title,
        with: classSchedule.instructor,
        name: classSchedule.name,
        room: classSchedule.room,
        date: classSchedule.schedule_date,
        from_time: classSchedule.from_time.split('.')[0],
        to_time: classSchedule.to_time.split('.')[0],
        color: classSchedule.class_schedule_color,
      })
    })
    events.value = schedule
  },
  auto: true,
})

  document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f6d365');

setTimeout(() => {
const person = '/g/people/'+document.cookie.split('=', 4)[3].split(';', 1)[0].split('%', 1)[0];
  const frame = document.getElementById("frame");
  frame.src = person;
   }, 100);




const { getStudentInfo } = studentStore()
let studentInfo = getStudentInfo().value

const feesResource = createResource({
  url: 'education.education.api.get_student_invoices',
  params: {
    student: studentInfo.name,
  },
  onSuccess: (response) => {
    printFormat = response?.print_format
    let invoices = response?.invoices
    invoices = invoices.sort((a, b) => {
      const statusOrder = { Overdue: 0, Unpaid: 1, Paid: 2 }

      const statusA = statusOrder[a.status]
      const statusB = statusOrder[b.status]

      if (statusA !== statusB) {
        return statusA - statusB
      }
    })
    tableData.rows = invoices
  },
  auto: true,
})

const tableData = reactive({
  rows: [],
  columns: [
    {
      label: 'Program',
      key: 'program',
      width: 1,
    },
    {
      label: 'Status',
      key: 'status',
      width: 1,
    },
    {
      label: 'Payment Date',
      key: 'payment_date',
      width: 1,
    },
    {
      label: 'Due Date',
      key: 'due_date',
      width: 1,
    },
    {
      label: 'Amount',
      key: 'amount',
      width: 1,
    },
    {
      label: 'Invoice',
      key: 'cta',
      width: 1,
    },
  ],
})

const currentRow = ref(null)
const showPaymentDialog = ref(false)

let printFormat = 'Standard'
const openInvoicePDF = (row) => {
  let url = `/api/method/frappe.utils.print_format.download_pdf?
		doctype=${encodeURIComponent('Sales Invoice')}
		&name=${encodeURIComponent(row.invoice)}
		&format=${encodeURIComponent(printFormat)}
	`
  window.open(url, '_blank')
}

const openModal = (row) => {
  currentRow.value = row
  showPaymentDialog.value = true
}

const success = () => {
  feesResource.reload()
  createToast({
    title: 'Payment Successful',
    icon: 'check',
    iconClasses: 'text-green-600',
  })
}
</script>
