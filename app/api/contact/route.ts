import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string
    const file = formData.get('file') as File | null

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const userName = name.trim() || 'USER'
    const hasCV = file && file.size > 0

    // Prepare email content
    const subject = hasCV 
      ? `NEW MESSAGE AND CV RECEIVED FROM ${userName.toUpperCase()} VIA LOMBARD-TECH.IO`
      : `NEW MESSAGE RECEIVED FROM ${userName.toUpperCase()} VIA LOMBARD-TECH.IO`

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: #061129; color: #d4af37; padding: 20px; text-align: center; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        
        <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #061129; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #061129;">Name:</strong> 
            <span style="color: #333;">${name}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #061129;">Email:</strong> 
            <a href="mailto:${email}" style="color: #d4af37;">${email}</a>
          </div>
          
          ${phone ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #061129;">Phone:</strong> 
            <span style="color: #333;">${phone}</span>
          </div>
          ` : ''}
          
          ${hasCV ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #061129;">CV Attached:</strong> 
            <span style="color: #d4af37;">Yes - ${file.name}</span>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px;">
            <strong style="color: #061129;">Message:</strong>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #d4af37;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>This message was sent via the contact form on lombard-tech.io</p>
        </div>
      </div>
    `

    const textContent = `
New Contact Form Submission from Lombard Tech Website

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${hasCV ? `CV Attached: ${file.name}` : ''}

Message:
${message}

---
This message was sent via the contact form on lombard-tech.io
    `

    // Prepare email data
    const emailData: any = {
      from: process.env.FROM_EMAIL!,
      to: process.env.COMPANY_EMAIL!,
      replyTo: email,
      subject: subject,
      html: htmlContent,
      text: textContent,
    }

    // Add attachment if file exists
    if (hasCV && file) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      emailData.attachments = [
        {
          filename: file.name,
          content: buffer,
        },
      ]
    }

    // Send email using Resend
    const emailResult = await resend.emails.send(emailData)

    if (emailResult.error) {
      console.error('Resend error:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: hasCV 
        ? 'Thank you! Your message and CV have been sent successfully.'
        : 'Thank you! Your message has been sent successfully.',
      emailId: emailResult.data?.id
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
} 