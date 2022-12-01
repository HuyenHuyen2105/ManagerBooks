<template>
  <header>
    <a href="/">Trang chủ</a>
    <a href="/register">Đăng kí</a>
    <a href="/login">Đăng nhập</a>
  </header>
  <nav class="navbar navbar-expand navbar-dark bg-dark img-book">
    <a href="/" class="navbar-brand book">
      <div class="typed-animation">
        <h1 class="typed-out">Quản lý sách</h1>
      </div>
    </a>
  </nav>
</template>

<style>
.img-book {
  background-image: url("https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-position: center center;
  background-size: cover;
  /* filter: grayscale(1); */
  display: flex;
  justify-content: center;
  align-items: center;
}
.book {
  display: inline-block;
  font-size: 40px;
}
header{
  width: 100%;
  background-color:#000;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  z-index: 99;
}
header a {
  text-decoration: none;
  color:#20E3B2;
  margin-left: 200px;  
}
.item {
  font-size: 20px;
}
/* .item:hover {
  color: #20e3b2;
} */
.typed-animation {
  display: inline-block;
}

.typed-out {
  color: rgba(0, 0, 0, 0.571);
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.25rem solid rgba(0, 0, 0, 0.571);
  font-size: 3rem;
  font-weight: 700;
  animation: typing 8s steps(40) infinite, blinking 1s infinite;
}

@keyframes typing {
  0%,
  100% {
    width: 0;
  }

  50%,
  90% {
    width: 100%;
  }
}

@keyframes blinking {
  0%,
  100% {
    border-color: transparent;
  }

  50% {
    border-color: rgba(0, 0, 0, 0.571);
  }
}
</style>
