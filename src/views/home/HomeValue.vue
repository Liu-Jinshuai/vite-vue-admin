<template>
    <div>
        <h1>vite-vue-admin</h1>
        <h2>🚀 Quick Start, Lightweight Management</h2>
        <p>
            <strong>vite-vue-admin</strong> — A management project template, just 50KB in size. Our vision is to achieve supreme efficiency with minimalist volume.
        </p>
        <p>
            <strong>Lightweight, yet Feature-Rich</strong>: Despite its small size, it includes all the high-efficiency features you need. From axios to eslint, from mock to vitest, we have carefully selected the latest technologies in the market to ensure that your project is both modern and powerful.
        </p>
        <p>
            <strong>Speedy Experience</strong>: In this era of rapid response, we understand the importance of speed. vite-vue-admin uses cutting-edge technology to ensure lightning-fast project startup and unparalleled stability.
        </p>
        <p>
            <strong>Flexible Customization</strong>: Uniquely, vite-vue-admin does not include any UI framework, offering you complete freedom. You can easily integrate and use your favorite UI framework to create a unique and personal style for your management interface.
        </p>
        <p>
            <strong>Sleek and Elegant Design</strong>: We believe in the coexistence of elegant design and outstanding functionality. The interface of vite-vue-admin is simple and intuitive, making management tasks easy and enjoyable.
        </p>
        <p>
            Join us to start your management project and experience an unprecedented level of ease and efficiency!
        </p>
    </div>
</template>
<script setup>
import { login } from '@/api/user'
const apitest = async () => {
    const res = await login()
    console.log(res)
}
apitest()
</script>