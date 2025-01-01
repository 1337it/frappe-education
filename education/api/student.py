import frappe
from frappe import _

@frappe.whitelist(allow_guest=True)  # Allow public access for student portal
def get_streak_for_student(student_id):
    # Ensure the student ID is valid
    if not frappe.db.exists('Student', student_id):
        frappe.throw(_("Student not found"), frappe.InvalidDocumentError)
    
    # Get the current streak and highest streak for the student
    streaks = get_attendance_streaks(student_id)
    
    return streaks

def get_attendance_streaks(student_id):
    # Fetch attendance records for the student
    attendance_records = frappe.get_all(
        'Student Attendance',
        filters={'student': student_id},
        fields=['date', 'status'],
        order_by='date desc'
    )
    
    if not attendance_records:
        return {"current_streak": 0, "highest_streak": 0}
    
    # Initialize streak variables
    current_streak = 0
    highest_streak = 0
    temp_streak = 0  # Temporary streak for calculating the longest streak
    previous_day = None
    
    # Iterate over the attendance records in reverse order (latest first)
    for record in attendance_records:
        if record['status'] == 'Present':
            # Increment the current streak
            if previous_day is None or (previous_day - record['date']).days == 1:
                current_streak += 1
                temp_streak += 1  # Track temporary streak for the highest streak calculation
            else:
                current_streak = 1  # Reset current streak if no consecutive attendance
                temp_streak = 1  # Reset temporary streak
        else:
            current_streak = 0  # Reset current streak if absent
            temp_streak = 0  # Reset temporary streak on absence
        
        # Track the highest streak
        if temp_streak > highest_streak:
            highest_streak = temp_streak
        
        # Set the previous_day as the current attendance date for the next iteration
        previous_day = record['date']
    
    return {"current_streak": current_streak, "highest_streak": highest_streak}
