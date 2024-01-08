<template>
    <div class="sidebar-main">
        <div class="sidebar-logo">
            <img src="/vite.svg" style="margin:0 5px;" alt="">
            vite-vue-admin
        </div>
        <div class="sidebar">
            <div v-for="(item, index) in menuList" :key="index">
                <div v-if="item.children">
                    <div @click="item.meta.isExpanded = !item.meta.isExpanded" class="a-menu">
                        <menu-icon class="menuicon"></menu-icon>
                        <div class="menu-title">{{ item.meta.name }}</div>
                        <arrow-down :class="{ 'arrow': true, 'up': !item.meta.isExpanded, 'down': item.meta.isExpanded }">
                        </arrow-down>
                    </div>
                    <div v-if="item.meta.isExpanded">
                        <div v-for="(childItem, childIndex) in item.children" :key="childIndex"
                            @click="handleItem(childItem)"
                            :class="{ 'small-menu': true, 'active': childItem.meta._isActive }">
                            {{ childItem.meta.name }}
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div @click="handleItem(item)" :class="{ 'a-menu': true, 'active': item.meta._isActive }">
                        <menu-icon class="menuicon"></menu-icon>
                        <div class="menu-title">{{ item.meta.name }}{{ item.meta.isExpanded }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ArrowDown from '@/components/icons/ArrowDown.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import menu from '@/router/modules/routers'
import router from '@/router'
const menuList = ref(menu);
router.beforeEach((to) => {
    menuList.value.forEach(menu => {
        if (menu.children) {
            menu.children.forEach(child => {
                const isActive = child.path === to.path;
                menu.meta.isExpanded = isActive;
                child.meta._isActive = isActive;
            });
        } else {
            menu.meta._isActive = menu.path === to.path;
        }
    });
});

const handleItem = (item) => {
    router.push(item.path)
}
</script>
<style lang="scss" scoped>
.sidebar-main {
    cursor: pointer;
    .sidebar-logo {
        height: var(--sidebar-logo-height);
        background-color: var(--sidebar-logo-bg-color);
        color: var(--sidebar-logo-text-color);
        border-bottom: 1px solid var(--sidebar-logo-border-color);
        overflow: hidden;
        display: flex;
        align-items: center;
        font-weight: bold;
    }
    .sidebar {
        height: calc(100vh - var(--sidebar-logo-height));
        overflow: auto;
        width: var(--sidebar-width);
        overflow-y: auto;
        user-select: none;
        line-height: var(--sidebar-line-height);
        font-size: var(--sidebar-font-size);
        color: var(--sidebar-menu-text-color);
        background-color: var(--sidebar-a-menu-bg-color);

        .active {
            color: var(--sidebar-menu-active-color);
        }

        .a-menu,
        .small-menu {
            display: flex;
            align-items: center;
            position: relative;
        }

        .a-menu {
            padding: 0 20px;
            background-color: var(--sidebar-a-menu-bg-color);

            &:hover {
                background-color: var(--sidebar-a-menu-hover-bg-color);
            }

            .menuicon {
                margin-right: 16px;
            }

            .menu-title {
                white-space: nowrap;
            }

            .arrow {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                right: 20px;
                translate: translateX(0);
                transition: transform 0.3s ease; // 过渡效果
            }

            .up {
                transform: translateY(-50%) rotate(0deg);
            }

            .down {
                transform: translateY(-50%) rotate(180deg);
            }
        }

        .small-menu {
            padding-left: 40px;
            background-color: var(--sidebar-small-menu-bg-color);

            &:hover {
                background-color: var(--sidebar-small-menu-hover-bg-color);
            }
        }
    }
}
</style>