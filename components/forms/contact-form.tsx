'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Upload, File, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn, formatFileSize } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  file: File | null
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  file?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFileSelect = useCallback((file: File) => {
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.type)) {
      setErrors(prev => ({ ...prev, file: 'Please upload a PDF or Word document' }))
      return
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, file: 'File size must be less than 5MB' }))
      return
    }

    setFormData(prev => ({ ...prev, file }))
    setErrors(prev => ({ ...prev, file: undefined }))
  }, [])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleUploadClick = () => {
    const fileInput = document.getElementById('cv-upload') as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
    
    const file = e.dataTransfer.files[0]
    if (file) {
      handleFileSelect(file)
    }
  }, [handleFileSelect])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Only set drag over if we have files
    if (e.dataTransfer.types.includes('Files')) {
      setIsDragOver(true)
    }
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Only handle drag leave if we're actually leaving the drop zone
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false)
    }
  }, [])

  const removeFile = () => {
    setFormData(prev => ({ ...prev, file: null }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the data to your API
      console.log('Form submitted:', formData)
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        file: null,
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-lt-gold mb-2">
          {formData.file ? 'CV and message submitted successfully!' : 'Thank you for your message!'}
        </h3>
        <p className="text-lt-ivory/80">
          We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-6"
        >
          Send another message
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          name="email"
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <Input
        name="phone"
        type="tel"
        label="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Optional"
      />

      <div className="relative">
        <textarea
          name="message"
          rows={6}
          className={cn(
            'block w-full px-4 py-4',
            'bg-lt-navy border border-lt-gold/20',
            'text-lt-ivory placeholder-lt-ivory/50',
            'focus:border-lt-gold focus:outline-none',
            'transition-all duration-200 ease-out',
            'resize-none rounded-lg',
            errors.message && 'border-red-500 focus:border-red-500'
          )}
          placeholder="Tell us about your project, requirements, or career interests..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <label className="absolute top-2 left-4 text-xs text-lt-gold">
          Message *
        </label>
        {errors.message && (
          <motion.p
            className="mt-2 text-sm text-red-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* File Upload Section */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-lt-gold">
          Upload CV (Optional)
        </label>
        
        <div className="bg-lt-gold/5 border border-lt-gold/20 rounded-lg p-4 mb-4">
          <p className="text-sm text-lt-ivory/80">
            <strong>Note:</strong> Upload your CV if you're interested in career opportunities. Accepted formats: PDF, DOC, DOCX (max 5MB).
          </p>
        </div>

        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300",
            isDragOver ? "border-lt-gold bg-lt-gold/5" : "border-lt-gold/30",
            errors.file ? "border-red-400 bg-red-500/5" : "",
            "relative"
          )}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {formData.file ? (
            <motion.div
              className="flex items-center justify-between p-4 bg-lt-gold/10 rounded border border-lt-gold/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-3">
                <File className="h-6 w-6 text-lt-gold" />
                <div className="text-left">
                  <p className="font-medium text-lt-ivory">{formData.file.name}</p>
                  <p className="text-sm text-lt-ivory/70">{formatFileSize(formData.file.size)}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="text-lt-ivory/70 hover:text-red-400 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          ) : (
            <div
              className="cursor-pointer"
              onClick={handleUploadClick}
            >
              <Upload className="h-12 w-12 text-lt-gold/60 mx-auto mb-4" />
              <p className="text-lt-ivory mb-2">
                <span className="font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-sm text-lt-ivory/60">PDF, DOC, DOCX up to 5MB</p>
            </div>
          )}
          {/* Hidden file input */}
          <input
            id="cv-upload"
            type="file"
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx"
            className="sr-only"
          />
        </div>
        
        {errors.file && (
          <motion.p
            className="text-sm text-red-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {errors.file}
          </motion.p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <motion.div
              className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message {formData.file && '& CV'}
          </>
        )}
      </Button>
    </motion.form>
  )
} 