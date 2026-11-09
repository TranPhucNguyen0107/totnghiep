/* =====================================================
   HÀM MÃ HÓA MẬT KHẨU (BẢO VỆ CHỐNG F12)
   ===================================================== */
function hashPw(str) {
  if (!str) return "";
  const s = String(str).trim().toLowerCase();
  const salt = "GRAD2026_NP_";
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i) ^ salt.charCodeAt(i % salt.length) ^ (i + 7);
    res += code.toString(16).padStart(2, "0");
  }
  return res;
}

/* =====================================================
   CẤU HÌNH DỮ LIỆU
   ===================================================== */
const MY_PHOTOS = Array.from({ length: 35 }, (_, i) => `img/img${i + 1}.jpg`);
const P = n => MY_PHOTOS[n % MY_PHOTOS.length];

const GALLERY_PHOTOS = [
  "gallery/img1.jpg", "gallery/img2.jpg", "gallery/img3.jpg", "gallery/img4.jpg", "gallery/img5.jpg",
  "gallery/img6.jpg", "gallery/img7.jpg", "gallery/img8.jpg", "gallery/img9.jpg", "gallery/img10.jpg", "gallery/img11.jpg", "gallery/img12.jpg", "gallery/img13.jpg", "gallery/img14.jpg", "gallery/img15.jpg",
  "gallery/img16.jpg", "gallery/img17.jpg", "gallery/img18.jpg", "gallery/img19.jpg", "gallery/img20.jpg",
  "gallery/img21.jpg", "gallery/img22.jpg", "gallery/img23.jpg", "gallery/img24.jpg", "gallery/img25.jpg", "gallery/img26.jpg", "gallery/img27.jpg", "gallery/img28.jpg", "gallery/img29.jpg", "gallery/img30.jpg",
  "gallery/img31.jpg", "gallery/img32.jpg", "gallery/img33.jpg", "gallery/img34.jpg", "gallery/img35.jpg"
];

const GUESTS = [
  { id: "LQK", name: "Lê Quang Khôi", password: hashPw(String.fromCharCode(108, 113, 107, 52, 57, 50)), photo: P(6), bgPos: "75% center", message: "Con cảm ơn ba mẹ đã luôn ủng hộ và hy sinh để con có được ngày hôm nay. Sự hiện diện của ba mẹ là món quà lớn nhất đối với con." },
  { id: "TI", name: "TI COMPANY", password: hashPw(String.fromCharCode(116, 105, 99, 111, 109, 112, 97, 110, 121, 56, 49, 53)), photo: P(7), message: "Cảm ơn cậu đã luôn ở bên động viên tớ suốt thời đại học. Hãy đến chung vui cùng tớ trong ngày đặc biệt này nhé!" },
  { id: "TLTT", name: "CHỊ TRẦN LƯU THANH TRÚC", password: hashPw(String.fromCharCode(116, 108, 116, 116, 51, 55, 49)), photo: P(11), message: "Chúc anh em gồng lãi thành công, long/short bách phát bách trúng. Nhớ chốt lời kịp lúc rồi đến dự lễ tốt nghiệp nhé!" },
  { id: "TMQ", name: "Trần Minh Quân", password: hashPw(String.fromCharCode(116, 109, 113, 57, 48, 52)), photo: P(8), bgPos: "25% center", message: "Có gì hôm đó đi để chụp hình cho Pháp nha hahaha. Nói chứ nếu Bin rảnh thì cứ đến chơi với Pháp nha. Dù gì thì Pháp cũng không có bạn bè gì nhiều chỉ chủ yếu có gia đình thôi à hehe" },
  { id: "NTHM", name: "Nguyễn Trần Hoàng Minh", password: hashPw(String.fromCharCode(110, 116, 104, 109, 50, 54, 56)), photo: P(12), message: "Chụp cho người ta nhiều rồi, hôm nay đến lượt mình làm mẫu. Anh em nhớ vác theo body lens đến nháy vài bô." },
  { id: "DHC", name: "Anh Đinh Huy Cường", password: hashPw(String.fromCharCode(100, 104, 99, 53, 49, 51)), photo: P(9), bgPos: "", bgSize: "140%", message: "Em cảm ơn anh vì đã cho em có được vinh dự được đồng hành cùng anh và các em Dự Trưởng. Còn bây giờ thì cũng thật vinh dự khi có sự hiện diện của anh trong ngày tốt nghiệp của em. Nếu anh rảnh thì anh ghé chơi nha hehehe" },
  { id: "SVMCS", name: "Servants.Micasa", password: hashPw(String.fromCharCode(115, 101, 114, 118, 97, 110, 116, 115, 48, 56, 57, 54, 52, 50)), photo: P(10), message: "Cảm ơn các em đã cho anh có được vinh dự đồng hành cùng các em trong những chuyến đi của thanh xuân. Còn giờ đây, trong chặng hành trình cuối cùng của anh nơi giảng đường, thật vinh dự khi có sự góp mặt của tất cả các em. Anh chờ các em ^^" },
  { id: "NAT", name: "Anh Nguyễn Anh Tuấn", password: hashPw(String.fromCharCode(110, 97, 116, 49, 56, 57)), photo: P(13), bgPos: "25% center", message: "Drop con beat mừng tốt nghiệp thôi anh em! Cảm ơn mọi người đã chia sẻ project file, drum kit cực xịn." },
  { id: "NHP", name: "Anh Nguyễn Hoàng Phúc", password: hashPw(String.fromCharCode(110, 104, 112, 55, 51, 53)), photo: P(14), message: "Bao nhiêu đêm thức trắng cãi nhau nảy lửa, cuối cùng team mình cũng hái được quả ngọt." },
  { id: "DTDM", name: "Đinh Thụy Diễm My", password: hashPw(String.fromCharCode(100, 116, 100, 109, 52, 50, 48)), photo: P(15), message: "Mới ngày nào còn ngồi chung ghế đá sân trường, giờ thằng bạn của tụi mày đã cử nhân rồi." },
  { id: "TTMA", name: "Trần Thị Minh Anh", password: hashPw(String.fromCharCode(116, 116, 109, 97, 54, 49, 55)), photo: P(16), message: "Cảm ơn mày đã chịu đựng thói quen sinh hoạt của tao mấy năm qua. Đến dự để tao khao một chầu ra trò." },
  { id: "NTTA", name: "nguyễn thụy tâm an", password: hashPw(String.fromCharCode(110, 116, 116, 97, 56, 53, 51)), photo: P(17), message: "Cảm ơn những ly bạc xỉu và câu chuyện phím đã cứu rỗi tâm hồn tôi qua các mùa thi cử." },
  { id: "TAK", name: "anh trần anh khoa", password: hashPw(String.fromCharCode(116, 97, 107, 50, 57, 52)), photo: P(18), message: "Em cảm ơn anh chị đã luôn truyền đạt kinh nghiệm và tài liệu quý giá cho em." },
  { id: "THTT", name: "chị trần hoàng thiện tâm", password: hashPw(String.fromCharCode(116, 104, 116, 116, 49, 48, 54)), photo: P(19), message: "Đến dự lễ để lấy vía ra trường đúng hạn nha mấy đứa. Cố gắng học tập, năm sau anh ra chúc mừng lại." },
  { id: "NTQ", name: "anh Nguyễn Thanh Quang", password: hashPw(String.fromCharCode(110, 116, 113, 53, 56, 50)), photo: P(20), message: "Tạm gác lại đường bóng trên sân cỏ, chủ nhật này anh em mặc suit đến sân khấu tốt nghiệp check-in." },
  { id: "PGH", name: "phạm gia huy", password: hashPw(String.fromCharCode(112, 103, 104, 51, 55, 57)), photo: P(21), message: "We finally made it! Cảm ơn mọi người đã cùng nhau cày từ vựng mỗi tối." },
  { id: "VPXQ", name: "chị vũ phan xuân quỳnh (sếp)", password: hashPw(String.fromCharCode(118, 112, 120, 113, 54, 52, 49)), photo: P(22), message: "Thẻ đã quẹt, đồ đã chốt. Lên đồ xúng xính đến nhận bằng cùng tôi nào mọi người ơi!" },
  { id: "NN", name: "chị Ngô bảo nghi", password: hashPw(String.fromCharCode(110, 110, 56, 50, 52)), photo: P(23), message: "Bữa tiệc này không thể thiếu những tay nâng ly chuyên nghiệp. Nhớ để bụng dự tiệc ăn mừng." },
  { id: "DTLP", name: "chị Đinh thị liên phương", password: hashPw(String.fromCharCode(100, 116, 108, 112, 57, 53, 49)), photo: P(24), message: "Chỉ cần 3 chữ: Hẹn gặp lại. Có mặt lúc 16h45 nhé anh em!" },
  { id: "PNTD", name: "pHAN NGUYỄN THỊNH ĐẠT", password: hashPw(String.fromCharCode(112, 110, 116, 100, 55, 51, 50)), photo: P(25), message: "Bạn là một trong những người có sức ảnh hưởng lớn nhất đến hành trình trưởng thành của tôi." },
  { id: "TPU", name: "trịnh phương uyên", password: hashPw(String.fromCharCode(116, 112, 117, 52, 49, 56)), photo: P(26), message: "Đi thì đi, không đi cũng phải đi." },
  { id: "NHTL", name: "Nguyễn hồng thùy linh", password: hashPw(String.fromCharCode(110, 104, 116, 108, 54, 48, 53)), photo: P(27), message: "Sự hiện diện của bạn trong ngày tốt nghiệp sẽ là niềm vui lớn đối tôi." },
  { id: "LTTT", name: "lê thị thanh thảo", password: hashPw(String.fromCharCode(108, 116, 116, 116, 56, 57, 51)), photo: P(28), message: "Cảm ơn bạn đã luôn là nguồn động viên và hỗ trợ tôi trong suốt thời gian học tập." },
  { id: "NTHA", name: "nguyễn thị hồng anh", password: hashPw(String.fromCharCode(110, 116, 104, 97, 49, 52, 55)), photo: P(29), message: "Sự hiện diện của bạn trong ngày tốt nghiệp sẽ là niềm vui lớn đối với tôi." },
  { id: "LTTT2", name: "lê thị thanh thảo 2", password: hashPw(String.fromCharCode(108, 116, 116, 116, 50, 53, 50, 54)), photo: P(30), message: "Cảm ơn bạn đã luôn là nguồn động viên và hỗ trợ tôi trong suốt thời gian học tập." },
  { id: "NTHA2", name: "nguyễn thị hồng anh 2", password: hashPw(String.fromCharCode(110, 116, 104, 97, 50, 51, 56, 49)), photo: P(31), message: "Sự hiện diện của bạn trong ngày tốt nghiệp sẽ là niềm vui lớn đối với tôi." },
  { id: "LTTT3", name: "lê thị thanh thảo 3", password: hashPw(String.fromCharCode(108, 116, 116, 116, 51, 55, 57, 52)), photo: P(32), message: "Cảm ơn bạn đã luôn là nguồn động viên và hỗ trợ tôi trong suốt thời gian học tập." },
  { id: "NTHA3", name: "nguyễn thị hồng anh 3", password: hashPw(String.fromCharCode(110, 116, 104, 97, 51, 49, 54, 50)), photo: P(33), message: "Sự hiện diện của bạn trong ngày tốt nghiệp sẽ là niềm vui lớn đối với tôi." },
  { id: "LBKH", name: "lê bá khánh hoàng", password: hashPw(String.fromCharCode(108, 98, 107, 104, 52, 53, 57)), photo: P(34), message: "Mày bước lên đây chụp hình cho tao, không đi thì ở nhà" },
];

/* =====================================================
   LOGIC CHÍNH
   ===================================================== */
const $ = id => document.getElementById(id);
const PASTELS = ["#8e1033", "#0a0a0a", "#8e1033", "#0a0a0a", "#8e1033", "#0a0a0a"];
const bg = (src, i) => `url('${src}'), linear-gradient(135deg, ${PASTELS[i % 6]}, ${PASTELS[(i + 1) % 6]})`;

function paint(el, g, i) {
  el.style.backgroundImage = bg(g.photo, i);
  el.style.backgroundPosition = g.bgPos || "center";
  el.style.backgroundSize = g.bgSize || "cover";
}

let current = null;
const opened = new Set((() => { try { return JSON.parse(sessionStorage.getItem("opened") || "[]"); } catch { return []; } })());
let unlockedGuestIndex = null;

function renderCollage() {
  const col = $("collage");
  if (col) {
    col.innerHTML = MY_PHOTOS.slice(0, 6).map((p, i) =>
      `<div class="tile" style="background-image:${bg(p, i)}"></div>`).join("");
  }
}

const ICON = {
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',
  unlock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>'
};

const pad2 = n => String(n).padStart(2, "0");
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const CAP_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>';

function gcMotes() {
  let m = "";
  for (let k = 0; k < 16; k++) {
    m += `<i class="gc-mote" style="left:${(6 + Math.random() * 88).toFixed(0)}%;--s:${(2 + Math.random() * 3).toFixed(1)}px;--h:-${(90 + Math.random() * 150).toFixed(0)}px;--du:${(2 + Math.random() * 1.6).toFixed(2)}s;--dl:${(0.3 + Math.random() * 1.6).toFixed(2)}s"></i>`;
  }
  return m;
}

function renderGuests() {
  const grid = $("guest-grid");
  if (!grid) return;
  grid.innerHTML = "";
  grid.classList.toggle("has-on", unlockedGuestIndex !== null);

  GUESTS.forEach((g, i) => {
    const num = pad2(i + 1), on = unlockedGuestIndex === i;
    const card = document.createElement("button");
    card.type = "button";
    card.id = `guest-card-${i}`;
    card.className = "gcard " + (on ? "is-on" : "is-sealed");
    card.setAttribute("aria-label", on ? `Mở thiệp của ${g.name}` : `Thiệp số ${num} đang được khóa`);

    const front = on ? `
        <span class="gc-rate"><b>${num}</b><small>Trân Trọng</small></span>
        <span class="gc-crest">${CAP_SVG}</span>
        <span class="gc-info"><i class="gc-line"></i><span class="gc-name">${esc(g.name)}</span>
          <small class="gc-cap">CLASS OF 2026</small><small class="gc-hint">Chạm để mở thiệp</small></span>
        <span class="gc-foil"></span>` : "";

    card.innerHTML = `
      <span class="gc-stage"><span class="gc-tilt"><span class="gc-flip">
        <span class="gc-face gc-front">${front}</span>
        <span class="gc-face gc-back">
          <i class="bk-c tl"></i><i class="bk-c tr"></i><i class="bk-c bl"></i><i class="bk-c br"></i>
          <small class="bk-top">THIỆP MỜI TỐT NGHIỆP</small>
          <span class="bk-art"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="bk-dots" cx="60" cy="60" r="57"/><circle class="bk-ring" cx="60" cy="60" r="49"/><circle class="bk-ring2" cx="60" cy="60" r="43"/></svg><i>N</i></span>
          <span class="bk-script">Graduation</span>
          <small class="bk-bot">TRẦN PHÚC NGUYÊN · 2026</small>
          <span class="bk-sheen"></span>
        </span>
      </span></span></span>
      <span class="gc-door">
        <i class="gc-leaf l"></i><i class="gc-leaf r"></i><i class="gc-beam"></i>
        <span class="gc-no">No. ${num}</span>
        <span class="gc-lock">${ICON.lock}</span>
        <span class="gc-redact"><i></i><i></i><i></i></span>
        <span class="gc-sealed-txt">Danh tính được giữ kín</span>
      </span>
      <i class="gc-glow"></i>${on ? `<span class="gc-frame"></span>${gcMotes()}` : ""}`;

    if (on) paint(card.querySelector(".gc-front"), g, i);

    card.addEventListener("click", () => {
      if (on) { if (card.classList.contains("is-open")) showInvite(g, i); return; }
      card.classList.remove("nudge"); void card.offsetWidth; card.classList.add("nudge");
      const f = $("quick-pw");
      if (f) { f.scrollIntoView({ behavior: "smooth", block: "center" }); setTimeout(() => f.focus({ preventScroll: true }), 450); }
    });
    grid.appendChild(card);
  });
}

function smoothScrollToElement(element) {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 2) + (element.offsetHeight / 2) - 20;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

function handleQuickUnlock() {
  const inputEl = $("quick-pw");
  if (!inputEl) return;
  const err = $("quick-error");
  const hashedInput = hashPw(inputEl.value);
  const idx = GUESTS.findIndex(g => g.password === hashedInput);

  if (idx !== -1) {
    unlockedGuestIndex = idx;
    if (err) err.classList.remove("show");
    inputEl.blur();
    renderGuests();
    const card = $(`guest-card-${idx}`);
    if (!card) return;
    smoothScrollToElement(card);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { card.classList.add("opening", "is-open"); return; }
    setTimeout(() => card.classList.add("opening"), 750);
    setTimeout(() => card.classList.add("is-open"), 750 + 3700);
  } else {
    if (err) err.classList.add("show");
    const form = document.querySelector(".unlock-form");
    if (form) { form.classList.remove("shake"); void form.offsetWidth; form.classList.add("shake"); }
    inputEl.select();
  }
}

if ($("quick-unlock-btn")) $("quick-unlock-btn").addEventListener("click", handleQuickUnlock);
if ($("quick-pw")) $("quick-pw").addEventListener("keydown", e => { if (e.key === "Enter") handleQuickUnlock(); });

function closeModal() {
  $("modal").classList.remove("open");
  $("modal").setAttribute("aria-hidden", "true");
}

function unlock() {
  if (hashPw($("pw").value) === current.guest.password) {
    closeModal();
    markOpened(current.guest.id, current.i);
    showInvite(current.guest, current.i);
    location.hash = "thiep/" + current.guest.id;
  } else {
    $("error").classList.add("show");
    const box = document.querySelector(".modal-box");
    box.classList.remove("shake"); void box.offsetWidth; box.classList.add("shake");
    $("pw").select();
  }
}

function setMessage(text) {
  const box = $("invite-msg");
  if (!box) return;
  box.textContent = "";
  text.split(" ").forEach((w, k) => {
    const sp = document.createElement("span");
    sp.className = "w"; sp.style.setProperty("--k", k); sp.textContent = w;
    box.append(sp, " ");
  });
}

let envTimer = null;
function showInvite(guest, i) {
  $("invite-name").textContent = guest.name;
  $("env-name").textContent = guest.name;
  setMessage(guest.message);
  paint($("invite-photo"), guest, i);
  clearTimeout(envTimer);
  $("envelope").classList.remove("open");
  $("env-stage").classList.remove("leave", "opening");
  $("env-stage").hidden = false;
  $("invite-main").hidden = true;
  $("home").hidden = true;
  $("invite").hidden = false;
  window.scrollTo(0, 0);
  setTimeout(() => $("env-seal").focus({ preventScroll: true }), 100);
}

function openEnvelope() {
  const env = $("envelope");
  if (env.classList.contains("open")) return;
  env.classList.add("open");
  $("env-stage").classList.add("opening");
  envTimer = setTimeout(() => {
    $("env-stage").classList.add("leave");
    $("invite-main").hidden = false;
    window.scrollTo(0, 0);
    envTimer = setTimeout(() => { $("env-stage").hidden = true; }, 650);
  }, 2000);
}

if ($("env-seal")) $("env-seal").addEventListener("click", openEnvelope);

const shell = document.querySelector(".pass-shell");
if (shell && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  $("invite").addEventListener("pointermove", e => {
    const r = shell.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / (innerWidth / 2);
    const y = (e.clientY - (r.top + r.height / 2)) / (innerHeight / 2);
    shell.style.setProperty("--rx", (-y * 5).toFixed(2) + "deg");
    shell.style.setProperty("--ry", (x * 7).toFixed(2) + "deg");
    shell.style.setProperty("--gx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
    shell.style.setProperty("--gy", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    shell.classList.add("tilting");
  });
  $("invite").addEventListener("pointerleave", () => {
    shell.classList.remove("tilting");
    shell.style.setProperty("--rx", "0deg"); shell.style.setProperty("--ry", "0deg");
  });
}

function goHome() {
  clearTimeout(envTimer);
  $("invite").hidden = true;
  $("home").hidden = false;
  history.replaceState(null, "", location.pathname);
}

if ($("unlock")) $("unlock").addEventListener("click", unlock);
if ($("cancel")) $("cancel").addEventListener("click", closeModal);
if ($("back")) $("back").addEventListener("click", goHome);
if ($("pw")) $("pw").addEventListener("keydown", e => { if (e.key === "Enter") unlock(); });
if ($("modal")) $("modal").addEventListener("click", e => { if (e.target === $("modal")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
window.addEventListener("hashchange", () => {
  if (!$("invite").hidden && !location.hash.startsWith("#thiep/")) goHome();
});

renderCollage();
renderGuests();

/* =====================================================
   HIỆU ỨNG HIỆN DẦN + ĐẾM NGƯỢC
   ===================================================== */
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".section-head, .gcard, .info-item").forEach((el, i) => {
  el.style.setProperty("--d", `${(i % 4) * 0.08}s`);
  el.classList.add("reveal");
  io.observe(el);
});

const EVENT_TIME = new Date("2026-11-29T16:45:00+07:00");
function tick() {
  if (!$("cd-d")) return;
  let s = Math.max(0, Math.floor((EVENT_TIME - Date.now()) / 1000));
  const p = n => String(n).padStart(2, "0");
  setCd("cd-d", p(Math.floor(s / 86400)));
  setCd("cd-h", p(Math.floor(s % 86400 / 3600)));
  setCd("cd-m", p(Math.floor(s % 3600 / 60)));
  setCd("cd-s", p(s % 60));
  const dd = $("inv-days"); if (dd) dd.textContent = Math.floor(s / 86400);
}
tick(); setInterval(tick, 1000);

const EVENT_END = new Date(EVENT_TIME.getTime() + 2.5 * 3600 * 1000);
const icsDate = d => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
const PLACE = "Hội trường Trần Chí Đáo, Nhà Điều hành ĐHQG-TPHCM";
if ($("cal-link")) {
  $("cal-link").href = "https://calendar.google.com/calendar/render?action=TEMPLATE"
    + "&text=" + encodeURIComponent("Lễ tốt nghiệp – Trần Phúc Nguyên")
    + "&dates=" + icsDate(EVENT_TIME) + "/" + icsDate(EVENT_END)
    + "&location=" + encodeURIComponent(PLACE)
    + "&details=" + encodeURIComponent("Quý khách vui lòng có mặt lúc 16:45.");
}
if ($("map-link")) {
  $("map-link").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Hội trường Trần Chí Đáo, Nhà Điều hành Đại học Quốc gia TP.HCM");
}

function markOpened(id, i) {
  opened.add(id);
  try { sessionStorage.setItem("opened", JSON.stringify([...opened])); } catch {}
  const c = document.querySelectorAll(".guest-card")[i];
  if (c) { c.classList.add("opened"); c.querySelector(".lock").innerHTML = ICON.unlock; }
}

if ($("stat-guests")) {
  $("stat-guests").dataset.to = GUESTS.length;
  const statIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    statIO.unobserve(e.target);
    const to = +e.target.dataset.to, t0 = performance.now();
    const step = t => {
      const k = Math.min(1, (t - t0) / 1400);
      e.target.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3)))).padStart(2, "0");
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: 0.6 });
  document.querySelectorAll(".stat b").forEach(b => statIO.observe(b));
}

const bar = $("progress"), toTop = document.querySelector(".to-top");
if (bar && toTop) {
  addEventListener("scroll", () => {
    const h = document.documentElement;
    bar.style.width = (scrollY / ((h.scrollHeight - innerHeight) || 1) * 100) + "%";
    toTop.classList.toggle("show", scrollY > 700);
  }, { passive: true });
}

const navLinks = [...document.querySelectorAll(".site-header nav a")];
const navIO = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
["top", "guests", "gallery", "info"].forEach(id => {
  if ($(id)) navIO.observe($(id));
});

if ($("map-link-home") && $("map-link")) {
  $("map-link-home").href = $("map-link").href;
}

if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const hero = document.querySelector(".hero"), col = $("collage");
  if (hero && col) {
    hero.addEventListener("pointermove", e => {
      const r = hero.getBoundingClientRect();
      col.style.setProperty("--px", (-((e.clientX - r.left) / r.width - 0.5) * 26).toFixed(1) + "px");
      col.style.setProperty("--py", (-((e.clientY - r.top) / r.height - 0.5) * 18).toFixed(1) + "px");
    });
  }
}

(function () {
  const pl = $("preloader"), num = $("pl-num"), ring = $("pl-ring");
  if (!pl || !ring) { document.body.classList.add("loaded"); return; }
  const C = 2 * Math.PI * 54, t0 = performance.now(), MIN = 2400;
  ring.style.strokeDasharray = C; ring.style.strokeDashoffset = C;
  let ready = document.readyState === "complete", shown = 0;
  addEventListener("load", () => { ready = true; });
  const setP = p => { num.textContent = Math.round(p); ring.style.strokeDashoffset = C * (1 - p / 100); };
  function finish() {
    setP(100);
    setTimeout(() => {
      pl.classList.add("done"); document.body.classList.add("loaded");
      setTimeout(() => pl.remove(), 1500);
    }, 500);
  }
  (function step(t) {
    const el = t - t0;
    const target = ready ? Math.min(100, el / MIN * 100) : Math.min(90, el / MIN * 100);
    shown += (target - shown) * 0.1;
    setP(shown);
    if ((shown >= 99.4 && el > MIN) || el > 7000) return finish();
    requestAnimationFrame(step);
  })(t0);
})();

(function () {
  const giant = document.querySelector(".hero-giant"), card = document.querySelector(".hero-card");
  if (!giant || !card) return;
  addEventListener("scroll", () => {
    const y = scrollY; if (y > innerHeight * 1.3) return;
    giant.style.transform = `translate(calc(-50% + ${(y * 0.35).toFixed(1)}px), -50%)`;
    card.style.translate = `0 ${(y * 0.12).toFixed(1)}px`;
  }, { passive: true });
})();

(function () {
  const grid = $("guest-grid"); if (!grid) return;
  grid.addEventListener("pointermove", e => {
    const c = e.target.closest(".gcard.is-open"); if (!c) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.setProperty("--rx", ((0.5 - y) * 14).toFixed(1) + "deg");
    c.style.setProperty("--ry", ((x - 0.5) * 16).toFixed(1) + "deg");
    c.style.setProperty("--gx", (x * 100).toFixed(0) + "%");
    c.style.setProperty("--gy", (y * 100).toFixed(0) + "%");
  });
  grid.addEventListener("pointerout", e => {
    const c = e.target.closest(".gcard.is-open");
    if (c && !c.contains(e.relatedTarget)) { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); }
  });
})();

(function () {
  const hero = document.querySelector(".hero"); if (!hero) return;
  const box = document.createElement("div"); box.className = "dust"; box.setAttribute("aria-hidden", "true");
  for (let k = 0; k < 14; k++) {
    const d = document.createElement("i"), z = 2 + Math.random() * 4;
    d.style.cssText = `left:${(Math.random() * 100).toFixed(1)}%;width:${z.toFixed(1)}px;height:${z.toFixed(1)}px;animation-duration:${(9 + Math.random() * 10).toFixed(1)}s;animation-delay:-${(Math.random() * 16).toFixed(1)}s;opacity:${(0.3 + Math.random() * 0.6).toFixed(2)}`;
    box.appendChild(d);
  }
  hero.appendChild(box);
})();

(function () {
  const list = GALLERY_PHOTOS.map(p => typeof p === "string" ? { src: p } : p), n = list.length;
  const sec = $("gallery"); if (!sec) return;
  if (!n) { sec.hidden = true; return; }
  const sizes = ["a", "b", "c", "b", "a"], reps = Math.max(1, Math.ceil(10 / n));
  function fill(track, order) {
    const half = Array.from({ length: n * reps }, (_, k) => order[k % n]);
    track.innerHTML = [...half, ...half].map((idx, k) => {
      const g = list[idx];
      return `<button class="shot ${sizes[(k % half.length) % 5]}" data-i="${idx}" aria-label="Xem ảnh ${idx + 1}" style="background-image:${bg(g.src, k)};background-position:${g.pos || "center"}"></button>`;
    }).join("");
  }
  const order = [...Array(n).keys()];
  fill(document.querySelector("#strip-a .strip-track"), order);
  fill(document.querySelector("#strip-b .strip-track"), [...order].reverse());

  const lb = $("lightbox"), img = $("lb-img"), cap = $("lb-cap");
  let cur = 0;
  const show = i => {
    cur = (i + n) % n; const g = list[cur];
    img.src = g.src; img.alt = g.caption || `Ảnh ${cur + 1}`;
    cap.textContent = (g.caption ? g.caption + " · " : "") + `${cur + 1} / ${n}`;
  };
  const open = i => { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; };
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; };
  sec.querySelectorAll(".strip").forEach(st => st.addEventListener("click", e => {
    const b = e.target.closest(".shot"); if (b) open(+b.dataset.i);
  }));
  $("lb-close").addEventListener("click", close);
  $("lb-prev").addEventListener("click", () => show(cur - 1));
  $("lb-next").addEventListener("click", () => show(cur + 1));
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
  let tx = 0;
  lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1)); });
})();

function setCd(id, v) {
  const el = $(id);
  if (!el || el.textContent === v) return;
  el.textContent = v;
  el.classList.remove("flip"); void el.offsetWidth; el.classList.add("flip");
}

(function () {
  const io2 = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io2.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".stat, .strip, .map-card, .footer-script, .footer-cols > div, .copy").forEach((el, i) => {
    el.style.setProperty("--d", `${(i % 4) * 0.1}s`);
    el.classList.add("reveal");
    io2.observe(el);
  });
})();

(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const tracks = [...document.querySelectorAll(".ribbon-track")];
  if (!tracks.length) return;
  const st = tracks.map((el, i) => { el.style.animation = "none"; return { el, rev: i % 2 === 1, o: 0, w: 0 }; });
  const measure = () => st.forEach(x => { x.w = x.el.scrollWidth / 2; });
  measure(); addEventListener("resize", measure); addEventListener("load", measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  let last = scrollY, vel = 0;
  (function loop() {
    const y = scrollY; vel += ((y - last) - vel) * 0.1; last = y;
    const sp = 0.7 + Math.min(Math.abs(vel) * 0.5, 16);
    st.forEach(x => {
      if (!x.w) return;
      x.o = (x.o + sp) % x.w;
      x.el.style.transform = `translateX(${x.rev ? x.o - x.w : -x.o}px)`;
    });
    requestAnimationFrame(loop);
  })();
})();

(function () {
  const col = $("collage"), foot = document.querySelector(".site-footer"), head = document.querySelector(".site-header");
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    if (col && y < innerHeight * 1.3) col.style.setProperty("--sy", (y * 0.16).toFixed(1) + "px");
    if (foot) {
      const r = foot.getBoundingClientRect();
      if (r.top < innerHeight) foot.style.setProperty("--fy", (((innerHeight - r.top) / (innerHeight + r.height) - 0.5) * -70).toFixed(1) + "px");
    }
    if (head && Math.abs(y - lastY) > 4) { head.classList.toggle("hide", y > lastY && y > 420); lastY = y; }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

(function () {
  const head = document.querySelector(".site-header"), btn = $("nav-toggle");
  if (!head || !btn) return;
  const set = open => {
    head.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
  };
  btn.addEventListener("click", () => set(!head.classList.contains("nav-open")));
  head.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => set(false)));
  document.addEventListener("click", e => { if (!head.contains(e.target)) set(false); });
  addEventListener("keydown", e => { if (e.key === "Escape") set(false); });
  addEventListener("resize", () => { if (innerWidth > 900) set(false); });
  addEventListener("scroll", () => { if (head.classList.contains("hide")) set(false); }, { passive: true });
})();