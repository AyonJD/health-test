import { Container, Divider } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import NextImage from 'next/image'
import logo from '../assets/logo.png'
import { generateInvoiceId } from '@/helper/generateInvoiceId'

const Invoice = () => {
  const router = useRouter()
  const dataArray = JSON.parse(
    decodeURIComponent(router.query.dataArray || '[]')
  )
  const subtotal = decodeURIComponent(router.query.subtotal || '')
  const executive = decodeURIComponent(router.query.executive || '')

  const [isLoaded, setIsLoaded] = useState(false)

  const printDiv = () => {
    if (typeof window !== 'undefined') {
      const printContents = document.getElementById('download_section')

      if (printContents) {
        const originalContents = document.body.innerHTML
        document.body.innerHTML = printContents.innerHTML
        window.print()
        document.body.innerHTML = originalContents
      }
    }
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      printDiv()
    }
  }, [isLoaded])

  return (
    <Container maxWidth="md" sx={{ py: 3 }} id="download_section">
      <div class="clearfix">
        <div id="logo">
          <NextImage src={logo} alt="logo" width={70} height={400} />
        </div>
        <div id="company">
          <h2 class="name">Health Care System</h2>
          <div>455 Foggy Heights, AZ 85004, US</div>
          <div>(602) 519-0450</div>
          <div>
            <a href="mailto:company@example.com">company@example.com</a>
          </div>
        </div>
      </div>
      <Divider sx={{ my: 3 }} />
      <div id="details" class="clearfix">
        <div id="client">
          <div class="to">INVOICE TO:</div>
          <h2 class="name">{executive}</h2>
          <div class="address">796 Silver Harbour, TX 79273, US</div>
          <div class="email">
            <a href="mailto:john@example.com">john@example.com</a>
          </div>
        </div>
        <div id="invoice">
          <h1>INVOICE</h1>
          <div class="date">ID: {generateInvoiceId(executive)}</div>
          <div class="date">Date of Invoice: 01/06/2014</div>
          <div class="date">Due Date: 30/06/2014</div>
        </div>
      </div>
      <table id="table" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="no">#</th>
            <th class="desc">Category</th>
            <th class="unit">Test</th>
            <th class="qty">Center</th>
            <th class="unit">Branch</th>
            <th class="total">Price</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((item, itemIndex) => (
            <tr key={itemIndex}>
              <td class="no">{itemIndex + 1}</td>
              <td class="desc">{item.category}</td>
              <td class="unit">{item.test}</td>
              <td class="qty">{item.center}</td>
              <td class="unit">{item.branches}</td>
              <td class="total">{item.price}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td colspan="2">Subtotal</td>
            <td>{subtotal}</td>
          </tr>
        </tfoot>
      </table>
      <div id="thanks">Thank you!</div>
      <div id="notices">
        <div>NOTICE:</div>
        <div class="notice">
          A finance charge of 1.5% will be made on unpaid balances after 30
          days.
        </div>
      </div>
    </Container>
  )
}

export default Invoice
