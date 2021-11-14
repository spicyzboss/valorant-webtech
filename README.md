# Webtech group project

โครงงานรายวิชา Web technology รหัสวิชา 06016312
เพื่อที่จะเรียนรู้โครงสร้างของเว็บไซต์ <https://playvalorant.com/th-th/>

## Installation

หลังจาก clone เสร็จเรียบร้อย ให้ติดตั้ง dependencies โดยใช้คำสั่ง

```bash
npm i
# or
yarn
```

## Getting Started

หลังจากติดตั้ง dependencies แล้ว ใช้คำสั่งนี้เพื่อเริ่มเซิฟเวอร์บน localhost

```bash
npm run dev
# or
yarn dev
```

## Docker

โปรเจคนี้สามารถรันบน server หรือ cloud ที่รองรับ docker ได้

### Build docker image

สามารถ build docker image ได้ โดยใช้คำสั่ง

```bash
docker build . -t web-valorant
```

ปล. การ build image อาจใช้เวลาหลายนาที

### Run docker image

หลังจาก build image เสร็จสามารถรัน docker image ได้โดยใช้คำสั่ง

```bash
docker run --name web-valorant -d -p 3000:3000 web-valorant
```

หลังจากนั้นลองเข้าไปที่ <http://localhost:3000/project/g41playvalorant/>
