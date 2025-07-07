'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Upload, File, X, CheckCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn, formatFileSize } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  phone: string
  position: string
  file: File | null
}

interface FormErrors {
  name?: string
  email?: string
  file?: string
}

export function CVUploadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    file: null,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const file = e.dataTransfer.files[0]
    if (file) {
      handleFileSelect(file)
    }
  }, [handleFileSelect])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
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

    if (!formData.file) {
      newErrors.file = 'Please upload your CV'
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
      
      // Here you would normally upload the file to your server
      console.log('CV submitted:', formData)
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        file: null,
      })
    } catch (error) {
      console.error('Error submitting CV:', error)
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
        <h3 className="text-xl font-semibold text-company-gold mb-2">
          CV submitted successfully!
        </h3>
        <p className="text-text-gray">
          We'll review your application and get back to you soon.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-6"
        >
          Submit another CV
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
          label="Full Name"
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

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          name="phone"
          type="tel"
          label="Phone Number (Optional)"
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          name="position"
          label="Position of Interest (Optional)"
          value={formData.position}
          onChange={handleChange}
        />
      </div>

      {/* File Upload */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-primary-black">
          Upload CV <span className="text-red-500">*</span>
        </label>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-amber-700">
            <strong>Demo Note:</strong> This is a demonstration form. Files are not actually saved to a server. 
            In a production environment, this would integrate with a backend service to securely store uploaded documents.
          </p>
        </div>

        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300",
            isDragOver ? "border-accent-blue bg-accent-blue/5" : "border-medium-gray",
            errors.file ? "border-red-500 bg-red-50" : ""
          )}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {formData.file ? (
            <motion.div
              className="flex items-center justify-between p-4 bg-light-gray rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-3">
                <File className="h-6 w-6 text-accent-blue" />
                <div className="text-left">
                  <p className="font-medium text-primary-black">{formData.file.name}</p>
                  <p className="text-sm text-text-gray">{formatFileSize(formData.file.size)}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <X className="h-4 w-4 text-text-gray" />
              </button>
            </motion.div>
          ) : (
            <>
              <Upload className="h-12 w-12 text-text-gray mx-auto mb-4" />
              <p className="text-primary-black font-medium mb-2">
                Drop your CV here or click to browse
              </p>
              <p className="text-sm text-text-gray mb-4">
                Supports PDF, DOC, and DOCX files up to 5MB
              </p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="cv-upload"
              />
              <label
                htmlFor="cv-upload"
                className={cn(
                  'inline-flex items-center px-4 py-2',
                  'bg-accent-blue text-pure-white',
                  'rounded border border-accent-blue',
                  'text-sm font-medium cursor-pointer',
                  'hover:bg-hover-blue transition-colors'
                )}
              >
                Choose File
              </label>
            </>
          )}
        </div>
        {errors.file && (
          <motion.p
            className="mt-2 text-sm text-red-500"
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
            Uploading...
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Submit CV
          </>
        )}
      </Button>
    </motion.form>
  )
} 