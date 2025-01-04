import { Link } from "react-router-dom";
import bank from "../../assets/bank.svg"; 


export default function RegistrationPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-center">INSPECT-2024 Registration</h1>

      {/* Important Dates */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">Important Dates</h2>
        <div className="space-y-2">
          <p><span className="font-semibold">Deadline for camera-ready submission:</span> 30 September 2024</p>
          <p><span className="font-semibold">Deadline for early bird registration:</span> 20 days from acceptance email / October 10, 2024 (Whichever is earlier)</p>
        </div>
      </section>

      {/* Submission Instructions */}
      <section className="grid md:grid-cols-2 gap-6 ">
        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Submission Instructions</h2>
          <p className="mb-4">The account details for payment of Registration fees are given as follows:</p>
          <div className="space-y-2">
            <li><span className="font-semibold">Name:</span> ABVIIITMG INSPECT CONFERENCE</li>
            <li><span className="font-semibold">Account Number:</span> 946210110007631</li>
            <li><span className="font-semibold">Bank Name and Branch:</span> Bank of India, IIITM Campus, Morena link road, Gwalior, M.P. -474003</li>
            <li><span className="font-semibold">Account Type:</span> Saving</li>
            <li><span className="font-semibold">MICR Code:</span> 474013010</li>
            <li><span className="font-semibold">IFSC Code:</span> BKID0009462</li>
            <li><span className="font-semibold">SWIFT Code:</span> BKIDINBBGWA</li>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="w-2/3" src={bank} alt="Bank of India" />
        </div>
      </section>

      {/* Payment Instructions */}
      <section className="space-y-4">
        <p>Use the following link for International Payments.</p>
        <Link 
          to="#"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          International Payments
        </Link>
        <p>Instructions: Instructions for International Payments</p>
        <p>Please enter your paper ID in the remarks column while making the payment.</p>
        <p>After making payment kindly take print/screenshot of your registration receipt.</p>
        <p>Once the registration fees are paid, enter the details in the below registration form and upload the receipt.</p>
        <p>
          For any queries regarding registration kindly contact Dr. Binod Prasad (
          <Link to="tel:7001940890" className="text-blue-600 hover:underline">7001940890</Link>
          ) or Dr. Pragya Swami (
          <Link to="tel:9008391562" className="text-blue-600 hover:underline">9008391562</Link>
          )
        </p>
        <Link 
          to="#"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Registration Form
        </Link>
      </section>

      {/* Registration Fees Details */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">Registration Fees Details</h2>
        <h3 className="text-lg font-semibold text-center mb-4">INSPECT 2024, IIITM Gwalior (with GST)</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr>
                <th className="border p-2">Category</th>
                <th className="border p-2 text-center bg-blue-600 text-white" colSpan={2}>Early Bird Registration</th>
                <th className="border p-2 text-center bg-yellow-500 text-white" colSpan={2}>Late Registration</th>
              </tr>
              <tr>
                <th className="border p-2"></th>
                <th className="border p-2 bg-green-600 text-white">IEEE</th>
                <th className="border p-2 bg-cyan-500">Non-IEEE</th>
                <th className="border p-2 bg-green-600 text-white">IEEE</th>
                <th className="border p-2 bg-cyan-500">Non-IEEE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 bg-cyan-100">Student (UG/ PG/ PhD)</td>
                <td className="border p-2 text-center">INR 7000</td>
                <td className="border p-2 text-center">INR 7500</td>
                <td className="border p-2 text-center">INR 8000</td>
                <td className="border p-2 text-center">INR 8500</td>
              </tr>
              <tr>
                <td className="border p-2 bg-cyan-100">Academician/ Industry participant</td>
                <td className="border p-2 text-center">INR 8500</td>
                <td className="border p-2 text-center">INR 9000</td>
                <td className="border p-2 text-center">INR 9500</td>
                <td className="border p-2 text-center">INR 10000</td>
              </tr>
              <tr>
                <td className="border p-2 bg-cyan-100">Author from SAARC* countries</td>
                <td className="border p-2 text-center" colSpan={2}>US$ 100</td>
                <td className="border p-2 text-center" colSpan={2}>US$ 125</td>
              </tr>
              <tr>
                <td className="border p-2 bg-cyan-100">International Author</td>
                <td className="border p-2 text-center" colSpan={2}>US$ 200</td>
                <td className="border p-2 text-center" colSpan={2}>US$ 250</td>
              </tr>
              <tr>
                <td className="border p-2 bg-cyan-100">Attendee (without Kit)</td>
                <td className="border p-2 text-center" colSpan={4}>INR 2000</td>
              </tr>
              <tr>
                <td className="border p-2 bg-cyan-100">Co-Author (without Kit)</td>
                <td className="border p-2 text-center" colSpan={4}>INR 2000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm">* Its member states are Afghanistan, Bangladesh, Bhutan, Maldives, Nepal, Pakistan, and Sri Lanka.</p>
        <Link to="#" className="text-blue-600 hover:underline">
          Know More
        </Link>
      </section>

      {/* Registration Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">Registration Guidelines</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Please note that the fees shown above include GST.</li>
          <li>Please note that the fees shown above applies for an individual person.</li>
          <li>Gateway charges (if any) must be borne by the participant.</li>
          <li>The IEEE member discount is only applicable if an active IEEE membership number (along with a scanned copy of the membership card) is provided during registration.</li>
          <li>Students are defined as full-time students (UG/PG/PhD) enrolled with a university/recognized educational body. A scanned copy of the student ID must be uploaded during registration.</li>
          <li>At least one of the authors must complete an author registration by the final camera-ready paper submission deadline for their paper to be included in the conference's final program.</li>
          <li>One author registration covers only one paper.</li>
          <li>All registrations include admission to all technical sessions and E-proceeding.</li>
          <li>No refunds will be made (in any case) for any registration category.</li>
          <li>Registration fee (except for attendees) includes a registration kit, refreshments (morning and evening), 2 lunches, one gala dinner, a presentation slot, a soft copy of the conference proceedings, a presentation certificate, entry to all the technical sessions, and cultural events.</li>
          <li>A registration kit will be provided only to the offline participants.</li>
          <li>An attendee's registration includes refreshments (morning and evening), 2 lunches, an attendee certificate, entry to all the technical sessions, and cultural events.</li>
          <li>A co-author registration includes a presentation slot (along with presenting author), a presentation certificate, entry to all the technical sessions, and cultural events.</li>
        </ul>
      </section>
    </div>
  )
}

