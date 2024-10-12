<template>
  <div
    class="containerHeader tw-flex tw-flex-col tw-justify-center tw-h-50 tw-bg-gray-50 tw-flex tw-px-10 tw-py-5"
  >
    <div
      class="tw-flex tw-flex-wrap tw-justify-center tw-flex-2 tw-p-2 tw-m-1 tw-mt-10"
    >
      <img
        class="logoImg tw-flex-2 max-md:tw-flex-1 max-md:tw-px-10 md:tw-mx-5 hover:tw-animate-pulse"
        src="../../assets/ahromlogoBlack.png"
      />
      <div
        class="tw-flex-2 tw-flex-basis-1/2 tw-text-4xl md:tw-text-6xl tw-mt-10"
      >
        فناوری اهرم
        <p class="tw-text-2xl tw-pt-6 tw-text-gray-600">
          طراحی وبسایت و اپلیکیشن
          <br />
          و ارائه دهنده نرم افزارها و خدمات دیجیتال
        </p>
        <button
          class="tw-mt-3 tw-bg-teal-600 tw-text-white tw-text-xl md:tw-text-2xl tw-py-2 tw-px-5 tw-rounded-xl hover:tw-bg-[#eec98a] hover:tw-text-black"
        >
          وارد شوید
        </button>
      </div>
    </div>

    <div
      class="tw-flex max-md:tw-flex-col tw-flex-2 tw-justify-center tw-mb-10"
    >
      <div
        class="tw-font-bold md:tw-text-6xl tw-text-3xl tw-text-black tw-mx-2 tw-block tw-mt-8"
      >
        کسب و کار خودت را
      </div>
      <div class="tw-flex">
        <div
          class="animtaion-content md:tw-text-6xl tw-text-3xl md:tw-h-[80px] tw-h-[40px] md:tw-mt-8 tw-mt-5 tw-ml-3"
        >
          <div class="h1 text-secondary ta-1">مکانیزه</div>
          <div class="h1 text-secondary ta-2">دیجیتال</div>
          <div class="h1 text-secondary ta-3">هوشمند</div>
          <div class="h1 text-secondary ta-4">ارزشمند</div>
          <div class="h1 text-secondary ta-5">پیشرفته</div>
        </div>

        <div
          class="tw-font-bold md:tw-text-6xl tw-text-3xl tw-text-black md:tw-mt-8 tw-mt-5"
        >
          بکن
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.containerHeader {
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    #e1f1ea 50%,
    #faefc6 110%
  );
}
.logoImg {
  /* background-image: linear-gradient(315deg, #b8dbcb 0%, #f5f7fa 74%); */
}

.animtaion-content {
  display: block;
  overflow: hidden;
  /* height: 80px; */
}
.h1.text-secondary.ta-1 {
  height: 80px;
  margin-bottom: 0rem;
  padding-top: 0px;
  padding-right: 0px;
}
.text-secondary {
  color: #dbfd51;
}
.h1 {
  margin-top: 0px;
  margin-bottom: 1rem;
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 5px;
  line-height: 1.03;
  font-weight: 600;
  transform: translate3d(0px, 0%, 0px);
  transform-style: preserve-3d;
  animation: change 5s infinite backwards;
}

@keyframes change {
  0% {
    transform: translate3d(0px, 0%, 0px);
  }
  25% {
    transform: translate3d(0px, -120%, 0px);
  }
  50% {
    transform: translate3d(0px, -250%, 0px);
  }
  75% {
    transform: translate3d(0px, -360%, 0px);
  }
  100% {
    transform: translate3d(0px, -470%, 0px);
  }
}

@media screen and (max-width: 680px) {
  @keyframes change {
    0% {
      transform: translate3d(0px, 0%, 0px);
    }
    25% {
      transform: translate3d(0px, -95%, 0px);
    }
    50% {
      transform: translate3d(0px, -240%, 0px);
    }
    75% {
      transform: translate3d(0px, -360%, 0px);
    }
    100% {
      transform: translate3d(0px, -490%, 0px);
    }
  }
  .h1.text-secondary.ta-1 {
    height: auto;
    margin: 0rem;
    padding-top: 0px;
    padding-right: 0px;
  }
}
</style>
