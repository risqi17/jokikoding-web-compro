"use client"
import { FC, FormEvent } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"


const ProjectForm: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="w-full mx-auto px-6 pb-20">
      <Card className="bg-gray-900/50 border-gray-800 z-40 max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-white text-2xl z-40">
            Hi Chief, mau joki apa nih?
          </CardTitle>
          <p className="text-gray-400 z-40">
            Kami menyediakan jasa implementasi proyek IT termurah, tercepat, dan terpercaya.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 z-40">
            <div>
              <h3 className="text-white mb-2 z-40">Detail Proyek</h3>
              <p className="text-sm text-gray-400 mb-4 z-40">
                Boleh diceritakan tentang proyekmu
              </p>
              <Textarea 
                name="details"
                placeholder="Masukkan detail proyek seperti fitur, fungsionalitas, dll"
                className="bg-gray-800 border-gray-700 text-white z-40"
                rows={6}
              />
            </div>
            <div className="flex justify-end">
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
                Skip, mau diskusi via chat aja
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectForm