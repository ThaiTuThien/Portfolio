"use client"
import { motion } from "framer-motion"
import { useEffect } from "react"

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "React Native",
  "TypeScript",
  "Flutter",
  "SQL server",
  "MongoDB",
  "RESTful APIs",
]

const projects = [
  {
    id: 1,
    title: "Dự án 1",
    description: "Ứng dụng quản lí chi tiêu - SpenVibe",
    tech: "React Native - Expo CLI, Tailwind CSS, Firebase, Jest và Appium for testing",
    detail: "Đây là một dự án quản lí chi tiêu cá nhân có tích hợp AI, quét hóa đơn bằng google OCR sau đó AI sẽ phân loại chi tiêu dựa trên hóa đơn thanh toán, có biểu đồ thể hiện chi tiêu theo từng tháng.",
    link: 'https://github.com/nguyen-gia-khoi/SpendVibe'
  },
  {
    id: 2,
    title: "Dự án 2",
    description: "Ứng dụng thương mại điện tử - TechBox",
    tech: "Flutter",
    detail: "Ứng dụng thương mại điện tử tích hợp thanh toán với Stripe và MoMo, với giao diện đẹp, đăng nhập bằng Google và quản lí đơn hàng hiệu quả.",
    link: 'https://github.com/sanqduonq0902/TechBox'
  },
  {
    id: 3,
    title: "Dự án 3",
    description: "Website thương mại điện tử - Itribe ",
    tech: "ASP.NET core web API, Tailwind CSS, MongoDB",
    detail: "Dự án 3 là website thương mại điện tử tích hợp API đăng nhập bằng Google, thanh toán bằng Stripe và MoMo, với giao diện đẹp và quản lí đơn hàng và voucher hiệu quả, chatbot AI hỗ trợ khách hàng tìm kiếm sản phẩm",
    link: 'https://github.com/ltnhan04/dotnet-ecommerce'
  },
]

const stats = [
  { label: "Năm học đại học", value: 3 },
  { label: "Dự án đã tham gia", value: 5 },
  { label: "Công nghệ đã học", value: 10 },
]

const timeline = [
  {
    year: "2022",
    title: "Bắt đầu đại học",
    desc: "Nhập học ngành Công nghệ thông tin, bắt đầu làm quen với lập trình.",
  },
  {
    year: "2023",
    title: "Khám phá lập trình web",
    desc: "Tự học HTML, CSS, JavaScript, React, Next.js và xây dựng các dự án nhỏ.",
  },
  {
    year: "2024",
    title: "Học lập trình mobile",
    desc: "Tìm hiểu React Native, Flutter, thực hiện dự án app và tích hợp AI vào trong dự án.",
  },
  {
    year: "2025",
    title: "Tìm kiếm thực tập",
    desc: "Sẵn sàng cho vị trí thực tập sinh Backend/Frontend/Mobile/Web, mong muốn học hỏi và phát triển trong môi trường thực tế.",
  },
]

export default function Home() {
  useEffect(() => {
    document.body.classList.add("animated-bg")
    return () => document.body.classList.remove("animated-bg")
  }, [])

  return (
    <main className="flex-grow w-full relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Animated background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900/20 animate-pulse -z-10" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 animate-gradient blur-3xl -z-10" />

        <img
          src="/avatar.jpg"
          alt="Thuận Thiên Avatar"
          className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-2xl mb-6 z-10 bg-gray-800"
        />

        <h1 className="text-5xl sm:text-6xl font-bold text-yellow-400 mb-2 tracking-tight drop-shadow-2xl text-center z-10">
          Thuận Thiên
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-200 text-center z-10">Sinh viên năm 3</h2>

        <motion.p
          className="mb-8 text-xl sm:text-2xl text-center font-medium text-gray-300 max-w-2xl z-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "Mình là sinh viên năm 3 ngành Công nghệ thông tin, đam mê lập trình web và mobile, đang tìm kiếm cơ hội thực
          tập để phát triển bản thân và đóng góp cho doanh nghiệp."
        </motion.p>

        <a
          href="#projects"
          className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-xl shadow-2xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 text-lg z-10 transform hover:scale-105"
        >
          Xem dự án
        </a>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full flex justify-center py-16"
      >
        <div className="flex flex-wrap gap-8 justify-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 min-w-[140px] border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <motion.span
                className="text-4xl font-extrabold text-yellow-400 mb-3"
                initial={{ textShadow: "0 0 0 #fff" }}
                whileInView={{ textShadow: "0 4px 24px #ffd700" }}
                transition={{ duration: 0.8 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-base font-medium text-gray-200 text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center py-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-yellow-400">Hành trình phát triển</h2>

        <div className="relative max-w-2xl w-full">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 -translate-x-1/2 rounded-full shadow-lg" />

          <ul className="space-y-12 z-10 relative">
            {timeline.map((item, idx) => (
              <motion.li
                key={item.year}
                className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"} w-full`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-[80%] max-w-md border-t-4 border-yellow-400 border border-white/20">
                  <div className="flex items-center mb-3">
                    <span className="text-xl font-bold text-yellow-400 mr-4">{item.year}</span>
                    <span className="text-lg font-semibold text-gray-200">{item.title}</span>
                  </div>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-20 px-4 max-w-4xl mx-auto"
        id="skills"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-yellow-400">Công nghệ sử dụng</h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.li
              key={skill}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl text-center font-medium text-gray-200 text-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: "rgba(250, 204, 21, 0.5)" }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-20 px-4 max-w-6xl mx-auto"
        id="projects"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-yellow-400">Dự án tiêu biểu</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="relative group p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border-t-4 border-yellow-400 flex flex-col justify-between min-h-[320px] overflow-hidden border border-white/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px 0 rgba(250, 204, 21, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
            >
              {project.image && (
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="rounded-xl shadow-lg mb-4 max-h-40 object-cover w-full group-hover:opacity-90 transition duration-300"
                />
              )}

              <h3 className="text-2xl font-semibold text-yellow-400 mb-3">{project.title}</h3>
              <p className="mb-3 text-gray-300">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <strong className="text-yellow-400">Công nghệ:</strong> {project.tech}
              </p>
              <p className="text-base text-gray-300 mb-4">{project.detail}</p>

              {/* Add Link Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg shadow-md hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 text-sm transform hover:scale-105 mt-auto"
              >
                Xem dự án trên GitHub
              </a>

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-600/95 to-yellow-700/95 backdrop-blur-sm text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 z-20 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h4>
                <p className="mb-3 text-center text-gray-900">{project.detail}</p>
                <span className="text-sm text-gray-800">Công nghệ: {project.tech}</span>
                {/* Add Link in Hover Overlay */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2 bg-gray-900 text-yellow-400 font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 text-sm"
                >
                  Xem trên GitHub
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-20 px-4 max-w-md mx-auto flex flex-col items-center"
        id="contact"
      >
        <img
          src="/avatar.jpg"
          alt="Thuận Thiên Avatar"
          className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-2xl bg-gray-800 mb-6"
        />

        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center text-yellow-400">Liên hệ</h2>

        <p className="mb-8 text-lg text-center text-gray-300">Hãy kết nối với tôi qua Facebook!</p>

        <a
          href="https://www.facebook.com/thuan.thien.284162/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-xl shadow-2xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 text-lg transform hover:scale-105"
        >
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
          </svg>
          Facebook của tôi
        </a>
      </motion.section>

      <footer className="py-8 text-center w-full text-gray-400 mt-12 border-t border-white/10">
        © 2025 Thuận Thiên. All rights reserved.
      </footer>
    </main>
  )
}
