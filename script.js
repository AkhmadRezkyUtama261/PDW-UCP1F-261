// Array untuk menyimpan data anggota (simulasi database)
let members = [
    { nama: "John Doe", email: "john@example.com", minat: "Web Development" },
    { nama: "Jane Smith", email: "jane@example.com", minat: "Data Science" },
    { nama: "Bob Johnson", email: "bob@example.com", minat: "AI/ML" }
];

// Fungsi untuk menampilkan data anggota di halaman utama
function displayMembers() {
    const tbody = document.getElementById('memberList');
    if (tbody) {
        tbody.innerHTML = '';
        members.forEach((member, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${member.nama}</td>
                    <td>${member.email}</td>
                    <td><span class="badge bg-primary">${member.minat}</span></td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }
}

// Event listener untuk form di form.html
const form = document.getElementById('memberForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const minat = document.getElementById('minat').value;
        
        // Simpan ke array
        members.push({ nama, email, minat });
        
        // Tampilkan hasil
        const result = document.getElementById('result');
        result.innerHTML = `
            <strong>✅ Berhasil!</strong> Data anggota baru telah disimpan:<br>
            👤 Nama: ${nama}<br>
            📧 Email: ${email}<br>
            🎯 Bidang Minat: ${minat}
        `;
        result.className = 'alert alert-success';
        result.classList.remove('d-none');
        
        // Reset form
        form.reset();
        
        alert('Data berhasil disimpan! Kembali ke beranda untuk melihat daftar lengkap.');
    });
}

// Fungsi untuk gallery.html - Ganti Visual
let currentVisualIndex = 0;
const visuals = [
    '<i class="bi bi-laptop fs-1"></i>',
    '<i class="bi bi-phone fs-1"></i>',
    '<i class="bi bi-cpu fs-1"></i>',
    '<i class="bi bi-graph-up fs-1"></i>'
];

function changeVisual() {
    const placeholder = document.querySelector('.image-placeholder');
    currentVisualIndex = (currentVisualIndex + 1) % visuals.length;
    placeholder.innerHTML = visuals[currentVisualIndex];
    // Ganti warna gradient juga
    const colors = ['#ff6b6b,#4ecdc4', '#45b7d1,#96ceb4', '#feca57,#ff9ff3', '#54a0ff,#5f27cd'];
    const colorIndex = currentVisualIndex % colors.length;
    placeholder.style.background = `linear-gradient(45deg, ${colors[colorIndex]})`;
    
    alert('🎨 Visual berhasil diganti!');
}

function toggleAudio() {
    const audio = document.getElementById('techAudio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Inisialisasi halaman
document.addEventListener('DOMContentLoaded', function() {
    displayMembers();
});