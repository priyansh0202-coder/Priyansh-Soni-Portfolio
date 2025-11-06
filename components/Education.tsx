import React from 'react'
import { Card } from './ui/card'

function Education() {
  return (
      <section className=" mx-auto px-4 py-16 lg:py-24  bg-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Education</h2>
          <div className="max-w-3xl mx-auto space-y-6">
              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow text-white bg-zinc-800/40">
                  <h3 className="text-xl font-semibold">Master of Business Administration</h3>
                  <p className="text-white/60">Business Analytics & Information Technology</p>
                  <p className="text-sm text-white/60">Devi Ahilya Vishwavidyalaya Indore</p>
              </Card>
              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow text-white bg-zinc-800/40">
                  <h3 className="text-xl font-semibold">Bachelor of Commerce</h3>
                  <p className="text-white/60">Computer Application</p>
                  <p className="text-sm text-white/60">Barkatullah University Bhopal</p>
              </Card>
          </div>
      </section>
  )
}

export default Education
