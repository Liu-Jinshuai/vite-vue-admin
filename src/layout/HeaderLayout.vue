<template>
    <div class="header-main">
        <div class="header-logo">
            <div class="avatar-main">
                <div class="avatar">
                    <img src="/user.svg" alt="avatar">
                </div>
                admin
                <div class="menu">
                    <div class="childmenu" @click="handleChangePass">修改密码</div>
                    <div class="childmenu" @click="handleQuit">退出登录</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const handleChangePass = () => {
    alert('修改密码')
}
const handleQuit = () => {
    alert('退出登录')
}
</script>
<style lang="scss" scoped>
.header-main {
    width: 100%;
    height: var(--layout-header-height);
    position: relative;
    background-color: var(--layout-header-bg-color);

    .header-logo {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;

        .avatar-main {
            cursor: pointer;
            display: flex;
            align-items: center;
            position: relative;

            .avatar {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                margin-right: 5px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            &:hover {
                .menu {
                    display: block;
                }
            }

            .menu {
                position: absolute;
                border-radius: 5px;
                display: none;
                bottom: -190%;
                left: 50%;
                transform: translateX(-50%);
                font-size: 12px;
                width: 100px;
                z-index: 1000;
                background-color: #fff;
                color: #000;
                border: 1px solid #ccc;
                line-height: 20px;

                .childmenu {
                    padding: 6px 0;
                    text-align: center;
                    height: 20px;

                    &:hover {
                        background-color: #ccc;
                    }
                }
            }
        }

    }
}
</style>