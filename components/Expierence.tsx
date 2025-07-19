import React from 'react'
import { Card } from './ui/card'

function Expierence() {
  return (
      <section className="container mx-auto px-4 py-16 lg:py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Experience</h2>
          <Card className="p-6 md:p-8 mb-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
              <p className="text-muted-foreground mb-2">Infusyx Services Pvt Ltd | Pune</p>
              <p className="text-sm text-muted-foreground mb-4">April 2025 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed 10+ visually appealing, responsive pages utilizing React and Tailwind CSS</li>
                  <li>Applied server-side rendering and dynamic routing in Next.js, increasing SEO</li>
                  <li>Reduced runtime errors by 30% using TypeScript</li>
                  <li>Achieved 25% faster load times through optimization</li>
                  {/* <li> Integrated RESTful APIs to fetch product data and authenticate users,
                      resulting in a 15% reduction in data fetch latency.</li> */}
              </ul>
          </Card>
      </section>
  )
}

export default Expierence
