<script>
  document.getElementById("anonymousForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        document.getElementById("confirmationMessage").style.display = "block";
        form.reset();
      }
    });
  });
</script>
