document.getElementById('posterUpload').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById('movieImage').src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('invitationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const date = document.getElementById('movieDate').value;
  const time = document.getElementById('movieTime').value;
  const location = document.getElementById('movieLocation').value;

  const outputText = `Hey! 🎬 Let's watch a movie together!\n\n📅 Date: ${date}\n⏰ Time: ${time}\n📍 Location: ${location}\n\nSee you there! 🍿❤️`;

  document.getElementById('outputText').textContent = outputText;
  document.getElementById('invitationOutput').classList.remove('hidden');
});

function copyInvitation() {
  const text = document.getElementById('outputText').textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Invitation copied to clipboard!");
  });
}