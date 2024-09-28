let lg = 'en';
const corner_button = document.getElementById('corner-button');
const text_1 = document.getElementById('text-1');
const text_2 = document.getElementById('text-2');
const text_3 = document.getElementById('text-3');
const text_4 = document.getElementById('text-4');
const text_5 = document.getElementById('text-5');
const text_6 = document.getElementById('text-6');
const text_7 = document.getElementById('text-7');
const text_all = document.getElementById('text-all');
corner_button.addEventListener('click', function() {
    if (lg == 'en') {
        lg = 'th'
    } else {
        lg = 'en'
    }
    runlg(lg)
});
function runlg(lg) {
    if (lg === 'en') {
        text_1.innerHTML = 'Subcribe Youtube';
        text_2.innerHTML = 'Follow Facebook';
        text_3.innerHTML = 'Follow Tiktok';
        text_4.innerHTML = 'Copy TrueMoney number';
        text_5.innerHTML = 'Join Discord';
        text_6.innerHTML = 'Contact channels';
        text_7.innerHTML = 'Follow Instagram';
        text_all.innerHTML = '𝙃𝘼𝙇𝙇𝙊 𝙂𝙐𝙔𝙎 💥';
        corner_button.innerHTML = 'th'
    } else {
        text_1.innerHTML = 'ติดตามในยูทูป';
        text_2.innerHTML = 'ติดตามในเฟสบุค';
        text_3.innerHTML = 'ติดตามในติ๊กต๊อก';
        text_4.innerHTML = 'คัดลอกเบอร์ทรูมันนี่';
        text_5.innerHTML = 'เข้าร่วมห้องในดิสคอส';
        text_6.innerHTML = 'ช่องทางติดต่อ';
        text_7.innerHTML = 'ติดตามใน Instagram';
        text_all.innerHTML = 'สวัสดีทุกคน💥';
        corner_button.innerHTML = 'en'
    }
}
document.getElementById('clicktocopynumber').addEventListener('click', function() {
    var ha = 'สำเร็จ';
    var hb = 'ไม่รองรับการคัดลอก';
    if (lg === 'en') {
        ha = 'Succeed';
        hb = 'Copying is not supported'
    }
    const textarea = document.createElement('textarea');
    textarea.value = '0610605912';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        swal(ha, "", "success")
    } catch (err) {
        swal(hb, "", "error")
    }
    document.body.removeChild(textarea)
})
