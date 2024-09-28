    <template #body-content>
      <div class="text-base">
        <div class="flex flex-col gap-4">
          <div
            class="flex items-center border-b border-solid border-lightGray pb-4 gap-2"
          >
            <Avatar
              size="3xl"
              class="h-12 w-12"
              :label="studentInfo.student_name"
              :image="studentInfo.image || null"
            />
            <div class="flex flex-col ml-2 gap-1">
              <p class="text-lg font-semibold">
                {{ studentInfo.student_name }}
              </p>
              <p class="text-gray-600">{{ studentInfo.student_email_id }}</p>
            </div>
          </div>
          <div>

        </div>
      </div>
    </template>

<script setup>
import { Dialog, Avatar, FeatherIcon } from 'frappe-ui'
import { inject } from 'vue'
import { studentStore } from '@/stores/student'
const { getStudentInfo } = studentStore()

const showProfileDialog = inject('showProfileDialog')

const studentInfo = getStudentInfo().value

const infoFormat = [
  {
    section: 'section 1',
    fields: [
      {
        label: 'Mobile Number',
        value: studentInfo.student_mobile_number,
      },
      {
        label: 'Joining Date',
        value: studentInfo.joining_date,
      },
      {
        label: 'Date of Birth',
        value: studentInfo.date_of_birth,
      },
      {
        label: 'Address',
        value: [
          studentInfo?.address_line_1,
          studentInfo?.address_line_2,
          studentInfo?.city,
          studentInfo?.pincode,
          studentInfo?.state,
          studentInfo?.country,
        ]
          .map((item) => item?.trim())
          .filter(Boolean)
          .join(', '),
      },
    ],
  },
  {
    section: 'section 2',
    fields: [
      {
        label: 'Blood Group',
        value: studentInfo.blood_group,
      },
      {
        label: 'Gender',
        value: studentInfo.gender,
      },
      {
        label: 'Nationality',
        value: studentInfo.nationality,
      },
    ],
  },
]
</script>
