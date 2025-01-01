<template>
  <div id='homesection' class='tabsection active' style='opacity:1;overflow:scroll;'>
	  <iframe src='' id='frame' height="100%" width="100%" style="padding: 0px;margin: 0px;z-index: 9;width: 100vw;position: absolute;left: 0;height:100vh;top:0;" title="Posts"></iframe>
<div id='badgescont' class='' style='opacity: 1;top: calc(3vh + 30vh);'>
		
		</div>
	  <p style="top: calc(51vh); position: relative; text-align: left; margin-left: 10px; font-size: 16px; font-weight: 500; margin-bottom: 5px; line-height: 1.3333733333; font-weight: 400; letter-spacing: -0.01em; font-family: &quot;SF Pro Text&quot;,&quot;Myriad Set Pro&quot;,&quot;SF Pro Icons&quot;,&quot;Apple Legacy Chevron&quot;,&quot;Helvetica Neue&quot;,&quot;Helvetica&quot;,&quot;Arial&quot;,sans-serif; font-weight: 600; color: gray !important;">Streaks</p>
	 <div id="streakcont" style="opacity:1;top:calc(51vh);display:flex;position:relative;left:0;justify-content:center;">
		 <div class="sq" style="background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%); margin-left: 10px; margin-right: 5px;"><p style="position: relative; text-align: center; font-size: 16px; font-weight: 500; margin-top: 15px; line-height: 1.3333733333; font-weight: 400; letter-spacing: -0.01em; font-family: &quot;SF Pro Text&quot;,&quot;Myriad Set Pro&quot;,&quot;SF Pro Icons&quot;,&quot;Apple Legacy Chevron&quot;,&quot;Helvetica Neue&quot;,&quot;Helvetica&quot;,&quot;Arial&quot;,sans-serif; font-weight: 600; color: white!important;">Current Streak</p><h1 id="current-streak"></h1></div>
		 <div class="sq" style="background-image: linear-gradient(to top, #09203f 0%, #537895 100%); margin-left: 5px; margin-right: 10px;"><p style="position: relative; text-align: center; font-size: 16px; font-weight: 500; margin-top: 15px; line-height: 1.3333733333; font-weight: 400; letter-spacing: -0.01em; font-family: &quot;SF Pro Text&quot;,&quot;Myriad Set Pro&quot;,&quot;SF Pro Icons&quot;,&quot;Apple Legacy Chevron&quot;,&quot;Helvetica Neue&quot;,&quot;Helvetica&quot;,&quot;Arial&quot;,sans-serif; font-weight: 600; color: white!important;">Longest Streak</p><h1 id="highest-streak"></h1></div>
	 </div>
	  <p style="top: calc(55vh); position: relative; text-align: left; margin-left: 10px; font-size: 16px; font-weight: 500; margin-bottom: 5px; line-height: 1.3333733333; font-weight: 400; letter-spacing: -0.01em; font-family: &quot;SF Pro Text&quot;,&quot;Myriad Set Pro&quot;,&quot;SF Pro Icons&quot;,&quot;Apple Legacy Chevron&quot;,&quot;Helvetica Neue&quot;,&quot;Helvetica&quot;,&quot;Arial&quot;,sans-serif; font-weight: 600; color: gray !important;">Calender</p>
	<div class="w-full h-full" style="z-index: 9;position: relative; top: calc(55vh); box-shadow: #00000026 0 5px 15px; margin: 0 10px 0 10px; width: calc(100vw - 20px); height: fit-content; border-radius: 15px;background-color: white;">
    <Calendar
      v-if="!scheduleResource.loading && scheduleResource.data"
      :events="events"
    />
  </div>  
  </div>
	<div id='transportsection' class='tabsection' style='opacity:1;'>
		<div id="vehicledetails" style="position:fixed;bottom:100px;width:80vw;left:10vw;backdrop-filter: blur(10px);background-color: rgba(255, 255, 255, 0.62);box-shadow: #00000026 0 5px 15px;">
			<p id="time"></p>
			<p id="seen"></p>
	<button class="enable" style="display:none">Enable Geolocation</button>
<button class="revoke" style="display:none">Revoke permission</button>
</div>
<div id="map"></div>
<iframe id="item" width="100%" height="100%" frameborder="0" style="border-radius: 15px;border: 1px solid white;width: 90vw;left: 5vw;position: fixed;top: 5vw;height: 66vh;box-shadow: #00000026 0 5px 15px;" referrerpolicy="no-referrer-when-downgrade" src allowfullscreen></iframe>
		</div>
	<div id='postssection' class='tabsection' style='opacity:1;'>
  <iframe src="/g/general/projects/12/discussions" height="100%" width="100%" style="padding: 0px;margin: 0px;z-index: 9;width: 100vw;position: absolute;left: 0;height:100vh;top:0;" title="Posts"></iframe>
</div>
	<div id='gradesection' class='tabsection' style='opacity:1;'>
  <div v-if="grades.data?.length > 0">
    <div class="px-5 py-4">
      <Dropdown class="mb-4" :options="allPrograms">
        <template #default="{ open }">
          <Button :label="selectedProgram">
            <template #suffix>
              <FeatherIcon
                :name="open ? 'chevron-up' : 'chevron-down'"
                class="h-4 text-gray-600"
              />
            </template>
          </Button>
        </template>
      </Dropdown>
      <ListView
        class="h-[250px]"
        :columns="tableData.columns"
        :rows="tableData.rows"
        :options="{
          selectable: false,
          showTooltip: false,
          onRowClick: () => {},
        }"
        row-key="id"
      />
    </div>
  </div>
  <div v-else>
    <MissingData message="No grades found" />
  </div>
		</div>
<div id='feessection' class='tabsection' style='opacity:1;'>
  <div v-if="tableData.rows.length > 0" class="px-5 py-4">
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
<div id='schedulesection' class='tabsection' style='opacity:1;'>
  <div class="w-full h-full">
    <Calendar
      v-if="!scheduleResource.loading && scheduleResource.data"
      :events="events"
    />
  </div>
	</div>
	<div id='gradesection' class='tabsection' style='opacity:1;'>
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
	import {
  Dropdown,
  createListResource,
} from 'frappe-ui'
import { groupBy } from '@/utils'
import { onMounted } from 'vue'
import { leaveStore } from '@/stores/leave'

import { Dialog } from 'frappe-ui'
import { storeToRefs } from 'pinia'
import NewLeave from '@/components/NewLeave.vue'
const { getCurrentProgram, getStudentInfo, getStudentGroups } = studentStore()


let studentInfo = getStudentInfo().value

// storeToRefs converts isAttendancePage to a ref, hence achieving reactivity
const { isAttendancePage } = storeToRefs(leaveStore())

onMounted(() => {
  setStudentGroup()
})

const selectedGroup = ref('Select Student Group')
const allStudentGroups = ref()
function setStudentGroup() {
  allStudentGroups.value = getStudentGroups().value
  allStudentGroups.value.forEach(
    (group) =>
      (group.onClick = () => {
        if (group.label === selectedGroup.value) return
        selectedGroup.value = group.label
        attendanceResource.reload()
      })
  )
  selectedGroup.value =
    allStudentGroups.value[0].label || 'Select Student Group'
  attendanceResource.update({
    params: {
      student_group: selectedGroup.value,
      student: studentInfo.name,
    },
  })
  attendanceResource.reload()
}

const newLeave = reactive({
  student: studentInfo.name,
  student_name: studentInfo.student_name,
  from_date: '',
  to_date: '',
  reason: '',
  total_days: '',
})

const attendanceStatus = {
  Present: 'bg-green-100',
  Absent: 'bg-red-200',
  Leave: 'bg-orange-100',
}

const attendanceResource = createResource({
  url: 'education.education.api.get_student_attendance',
  params: {
    student_group: selectedGroup.value,
    student: studentInfo.name,
  },
  transform: (attendance) => {
    // filter attendance to remove duplicate attendance data
    attendance = attendance.filter(
      (attendance, index, self) =>
        index === self.findIndex((t) => t.date === attendance.date)
    )
console.log(attendance);
    let events = []

    attendance.forEach((attendance) => {
      events.push({
        name: attendance.name,
        title: attendance.status,
        background_color: attendanceStatus[attendance.status],
        date: attendance.date,
        status: attendance.status,
      })
    })
    return events
  },
  onError: (err) => {
    console.log('Error', err)
  },
})
console.log(attendanceResource);




const allPrograms = ref([])
const selectedProgram = ref('')

const tableData = ref({
	columns: [
    {
      label: 'Course',
      key: 'course',
    },
    {
      label: 'Batch',
      key: 'batch',
    },
  ],
  rows: [],
})


let currentProgram = getCurrentProgram().value
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
const person = '/g/people/'+document.cookie.split('=', 4)[3].split(';', 1)[0].replace('%40', '@');
  const frame = document.getElementById("frame");
  frame.src = person;
   }, 100);


 

const student_programs = createResource({
  url: 'education.education.api.get_student_programs',
  makeParams() {
    return {
      // student: studentInfo.value?.name
      student: studentInfo.name,
    }
  },
  onSuccess: (response) => {
    let programs = []
    response.forEach((program) => {
      programs.push({
        label: program.program,
        onClick: () => (selectedProgram.value = program.program),
      })
    })
    selectedProgram.value = programs[programs.length - 1].label
    allPrograms.value = programs
  },
  auto: true,
})

const grades = createListResource({
  doctype: 'Assessment Result',
  fields: [
    'name',
    'student_group',
    'course',
    'assessment_group',
    'total_score',
    'maximum_score',
    'grade',
  ],
  filters: {
    student: studentInfo.name,
    program: currentProgram.program,
    // student:"EDU-STU-2023-00005",
    // program:"Comp Science"
  },
  transform: () => {},

  onSuccess: (response) => {
    let conductedExams = groupBy(response, (row) => row.assessment_group)
    let exams = Object.keys(conductedExams)
    updateColumns(exams)
    let courses = groupBy(response, (row) => row.course)
    Object.keys(courses).forEach((course) => {
      let row = {}
      row.course = course
      row.batch = courses[course][0].student_group
      exams.forEach((exam) => {
        let examData = conductedExams[exam].find((row) => row.course === course)
        row[exam] = examData
          ? `${examData.total_score}/${examData.maximum_score}`
          : '-'
      })
      tableData.value.rows.push(row)
    })
  },
  auto: true,
})

const updateColumns = (exams) => {
  exams.forEach((exam) => {
    let col = {}
    col.label = exam
    col.key = exam
    tableData.value.columns.push(col)
  })
}

const streaks = createResource({
  url: 'education.api.student.get_streak_for_student',
  params: {
    student_id: studentInfo.id,
  },
onSuccess: (response) => {
{
                        document.getElementById("current-streak").innerText = response.message.current_streak;
                        document.getElementById("highest-streak").innerText = response.message.highest_streak;
      
}
});

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
    tableDataa.rows = invoices
  },
  auto: true,
})

const tableDataa = reactive({
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
