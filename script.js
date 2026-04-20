// Data anggota (simulasi database)
let members = [
    {nama: "John Doe", email: "john@example.com", minat: "Web Development"},
    {nama: "Jane Smith", email: "jane@example.com", minat: "Data Science"},
    {nama: "Bob Johnson", email: "bob@example.com", minat: "AI/ML"}
];

// Tampilkan tabel di index.html
function displayMembers() {
    const tbody = document.getElementById('memberList');
    if (tbody) {
        tbody.innerHTML = '';
        members.forEach((member, i) => {
            tbody.innerHTML += `
                <tr>
                    <td>${i+1}</td>
                    <td>${member.nama}</td>
                    <td>${member.email}</td>
                    <td>${member.minat}</td>
                </tr>
            `;
        });
    }
}

// Form handler di form.html
const form = document.getElementById('memberForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const minat = document.getElementById('minat').value;
        
        // Simpan data
        members.push({nama, email, minat});
        
        // Tampilkan hasil
        document.getElementById('result').innerHTML = 
            `Berhasil disimpan!<br>
            Nama: ${nama}<br>
            Email: ${email}<br>
            Minat: ${minat}`;
        document.getElementById('result').className = 'success';
        
        form.reset();
        alert('Data tersimpan!');
    });
}

// Gallery interaksi
let imgIndex = 0;
const emojis = ['🖥️', '📱', '🤖', '📊'];

function changeImage() {
    const img = document.getElementById('techImage');
    imgIndex = (imgIndex + 1) % emojis.length;
    img.innerHTML = `<div>${emojis[imgIndex]}</div>`;
    alert('Gambar diganti!');
}

function toggleAudio() {
    const audio = document.getElementById('techAudio');
    if (audio.paused) audio.play();
    else audio.pause();
}

// Init
document.addEventListener('DOMContentLoaded', displayMembers);