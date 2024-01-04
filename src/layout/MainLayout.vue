<template>
    <div class="layout">
        <sidebar-menu></sidebar-menu>
        <div class="content">
            <header-layout></header-layout>
            <div class="content-msg">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import SidebarMenu from './SidebarMenu.vue';
import HeaderLayout from './HeaderLayout.vue';
</script>
<style lang="scss" scoped>
.layout {
    display: flex;
    height: 100%;
}

.content {
    flex: 1;
    background-color: var(--layout-content-bg-color);

    .content-msg {
        margin: var(--layout-content-msg-margin);
        padding: var(--layout-content-msg-padding);
        border-radius: var(--layout-content-msg-border-radius);
        height: calc(100% - var(--layout-header-height) - var(--layout-content-msg-margin) * 2 - var(--layout-content-msg-padding) * 2);
        overflow: auto;
        background-color: var(--layout-content-msg-bg-color);
    }
}
</style>