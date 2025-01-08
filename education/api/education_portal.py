import frappe

@frappe.whitelist()
def get_student_username():
    """
    Fetches the username of the logged-in student.
    """
    user = frappe.session.user
    if user == "Guest":
        return {"message": "You must be logged in to access this feature."}

    # Fetch the linked Student profile based on the logged-in User
    student = frappe.db.get_value("User", {"email": user}, ["name", "username"])
    if not student:
        return {"message": "No student profile found for the logged-in user."}

    return {"username": student.get("username")}
