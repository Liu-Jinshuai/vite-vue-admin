<template>
    <div>
        <h1>vite-vue-admin</h1>
        <h2>🚀 Quick Start, Lightweight Management</h2>
        <p><strong>vite-vue-admin</strong> — A management project template, just 50KB in size. Our vision is
            to achieve supreme efficiency with minimalist volume.</p>
        <p><strong>Lightweight, yet Feature-Rich</strong>: Despite its small size, it includes all the high-efficiency
            features you need. From axios to eslint, from mock to vitest, we have carefully selected the latest technologies
            to ensure that your project is modern and powerful.</p>
        <p><strong>Speedy Experience</strong>: In this era of rapid response, we understand the importance of speed.
            vite-vue-admin uses cutting-edge technology to ensure lightning-fast project startup and unparalleled stability.
        </p>
        <p><strong>Flexible Customization</strong>: Uniquely, vite-vue-admin does not include any UI framework, offering you
            complete freedom. You can easily integrate and use your favorite UI framework to create a unique and personal
            style for your management interface.</p>
        <p><strong>Sleek and Elegant Design</strong>: We believe in the coexistence of elegant design and outstanding
            functionality. The interface of vite-vue-admin is simple and intuitive, making management tasks easy and
            enjoyable.</p>
        <p><strong>Installation Guide</strong>: Follow these simple steps to get started with vite-vue-admin.</p>
        <ol>
            <li>Clone the repository: <code>git clone https://github.com/Liu-Jinshuai/vite-vue-admin.git</code></li>
            <li>Navigate to the directory: <code>cd vite-vue-admin</code></li>
            <li>Install dependencies: <code>npm install</code></li>
            <li>Start the development server: <code>npm run dev</code></li>
        </ol>
        <p><strong>System Requirements</strong>: Node.js version: Node >= 18 is required for compatibility and optimal
            performance.</p>
        <p><strong>Live Demo</strong>: Experience vite-vue-admin here: <a
                href="https://liu-jinshuai.github.io/vite-vue-admin/">https://liu-jinshuai.github.io/vite-vue-admin/</a></p>
        <p>Join us to start your management project and experience an unprecedented level of ease and efficiency!</p>
</div></template>
<script setup>
import { login } from '@/api/user'
const apitest = async () => {
    const res = await login()
    console.log(res)
}
apitest()
</script>