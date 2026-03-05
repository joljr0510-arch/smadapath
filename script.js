function hitung(){

let mtk = parseInt(document.getElementById("mtk").value);
let ipa = parseInt(document.getElementById("ipa").value);
let ips = parseInt(document.getElementById("ips").value);
let ing = parseInt(document.getElementById("inggris").value);
let indo = parseInt(document.getElementById("indo").value);
let info = parseInt(document.getElementById("info").value);
let minat = document.getElementById("minat").value;

let kelas = {

"Kimia Biologi Sosiologi Jepang": (ipa*0.4)+(ips*0.3)+(ing*0.3),

"Kimia Biologi Geografi Jepang": (ipa*0.5)+(ips*0.2)+(ing*0.3),

"Fisika Antropologi MTK Lanjut Inggris Lanjut": (mtk*0.5)+(ipa*0.3)+(ing*0.2),

"Informatika MTK Lanjut Sejarah Inggris": (info*0.5)+(mtk*0.3)+(ing*0.2),

"Bahasa Jepang Inggris Antropologi Sejarah": (ing*0.5)+(indo*0.3)+(ips*0.2),

"MTK Lanjut Fisika Inggris Geografi": (mtk*0.5)+(ipa*0.3)+(ing*0.2),

"Ekonomi Indo Lanjut MTK Inggris": (ips*0.4)+(mtk*0.3)+(ing*0.3),

"Indo Lanjut Sosiologi Ekonomi Inggris": (ips*0.5)+(indo*0.3)+(ing*0.2),

"MTK Lanjut Ekonomi Geografi Inggris": (mtk*0.4)+(ips*0.3)+(ing*0.3),

"MTK Lanjut Ekonomi Sejarah Inggris": (mtk*0.4)+(ips*0.4)+(ing*0.2)

}

let sorted = Object.entries(kelas).sort((a,b)=>b[1]-a[1])

let top3 = sorted.slice(0,3)

let hasil = ""

top3.forEach((k,i)=>{

hasil += "<h3>"+(i+1)+". "+k[0]+"</h3>"
hasil += "Kecocokan : "+k[1].toFixed(1)+"%<br>"

})

document.getElementById("hasil").innerHTML = hasil

grafik(top3)

}

function grafik(data){

let label = data.map(x=>x[0])
let nilai = data.map(x=>x[1])

new Chart(document.getElementById("grafik"),{
type:"bar",
data:{
labels:label,
datasets:[{
label:"Kecocokan Kelas",
data:nilai
}]
}
})

}

function chat(){

let input = document.getElementById("chatinput").value
let chatbox = document.getElementById("chatbox")

let jawab=""

if(input.includes("jurusan"))
jawab="Jika kamu suka sains kamu bisa memilih kelas dengan kimia atau fisika."

else if(input.includes("bingung"))
jawab="Coba lihat nilai kamu yang paling tinggi, itu biasanya menunjukkan bakatmu."

else
jawab="Terus eksplor minatmu, semua pilihan bisa sukses jika kamu tekun."

chatbox.innerHTML += "<p><b>Kamu:</b> "+input+"</p>"
chatbox.innerHTML += "<p><b>Konselor AI:</b> "+jawab+"</p>"

}

function downloadPDF(){

const { jsPDF } = window.jspdf
let pdf = new jsPDF()

let hasil = document.getElementById("hasil").innerText

pdf.text("Laporan CareerPath AI",20,20)
pdf.text(hasil,20,40)

pdf.save("laporan-karir.pdf")

}
