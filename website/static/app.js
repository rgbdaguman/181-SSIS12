
$(document).ready(function() {
    // Listen for click events on the "Delete" buttons
    $('.delete-college').click(function(event) {
        event.preventDefault();
        var collegeCode = $(this).data('college-code');

        if (confirm('Are you sure you want to delete this college?')) {
            // Send a DELETE request using AJAX
            $.ajax({
                type: 'DELETE',
                url: '/colleges/delete/' + collegeCode,
                success: function(data) {
                    if (data.success) {
                        // Reload the page after successful delete
                        location.reload();
                    } else {
                        alert('Failed to delete the college.');
                    }
                },
                error: function() {
                    alert('Failed to delete the college.');
                }
            });
        }
    });
});


const editButtons = document.querySelectorAll('.edit-college');
editButtons.forEach(button => {
    button.addEventListener('click', () => {
        const collegeCode = button.getAttribute('data-college-code');
        const collegeName = button.getAttribute('data-college-name');

        // Populate the edit form fields
        const editCollegeCodeField = document.getElementById('editCollegeCode');
        const editCollegeNameField = document.getElementById('editCollegeName');
        editCollegeCodeField.value = collegeCode;
        editCollegeNameField.value = collegeName;
    });
});

