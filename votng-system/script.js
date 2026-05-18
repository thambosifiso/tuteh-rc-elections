document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const studentId = document.getElementById('studentId').value;
  const keyNumber = document.getElementById('keyNumber').value;

  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ studentId, keyNumber })
  });

  const data = await res.json();
  if (data.success) {
    localStorage.setItem('studentId', studentId);
    window.location.href = 'ballot.html';
  } else {
    alert(data.message);
  }
});

document.getElementById('voteForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const candidate = document.getElementById('candidate').value;
  const studentId = localStorage.getItem('studentId');

  const res = await fetch('/vote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ studentId, candidate })
  });

  const data = await res.json();
  if (data.success) {
    window.location.href = 'confirmation.html';
  } else {
    alert(data.message);
  }
});
