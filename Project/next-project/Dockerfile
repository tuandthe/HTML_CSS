# --- Stage 1: Cài đặt dependencies ---
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json và package-lock.json
COPY package.json package-lock.json ./ 

# Cài đặt dependencies (dùng ci để cài chính xác phiên bản trong lock file)
RUN npm ci

# --- Stage 2: Build ứng dụng ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copy node_modules từ stage trước
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# QUAN TRỌNG: Chạy prisma generate để tạo Prisma Client
# Vì bạn config output vào src/generated nên bước này cực kỳ quan trọng trước khi build Next.js
RUN npx prisma generate

# Tắt gửi dữ liệu ẩn danh về Next.js để build nhanh hơn
ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js
RUN npm run build

# --- Stage 3: Runner (Image để chạy thật) ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Tạo user non-root để tăng bảo mật
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy thư mục public (nếu có ảnh tĩnh)
COPY --from=builder /app/public ./public

# Copy thư mục .next/standalone (Kết quả của việc build standalone)
# Thư mục này chứa server nodejs nhỏ gọn và các file cần thiết
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy thư mục static (CSS, JS client)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy Prisma generated client (output: ../src/generated/prisma)
COPY --from=builder --chown=nextjs:nodejs /app/src/generated ./src/generated

# Chuyển sang user non-root
USER nextjs

# Expose cổng 3000
EXPOSE 3000
ENV PORT 3000

# Lệnh chạy server
CMD ["node", "server.js"]