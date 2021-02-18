<template>
  <div class="layout">
    <div class="layout_content">
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
