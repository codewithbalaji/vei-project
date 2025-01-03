
const ImportantTable = () => {
  return (
    <div className="h-screen flex flex-col items-center mt-8 mb-24">
      <h1 className="text-4xl font-semibold">Important Dates</h1>
      <div className="overflow-hidden whitespace-nowrap mt-4">
        <p className="text-3xl text-red-500 font-semibold animate-marquee">
        The INSPECT-2024 (INtelligent Signal Processing and Effective Communication Technologies) conference will be held at ABV-IIITM, Gwalior during 7th and 8th December 2024.
        </p>
      </div>
      {/* Table  */}
      <div className="w-full max-w-6xl mx-auto p-6">
      <div className="rounded-lg overflow-hidden bg-custom-gradient border border-white ">
      <div className="m-4 border-2 border-white"> 
        <table className="w-full  border-white">
          <thead className="sr-only">
            <tr>
              <th>Round 2</th>
              <th>Round 1</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white">
              <td className="p-4 text-white font-medium border-r border-white">Round 2</td>
              <td className="p-4 text-white font-medium">Round 1</td>
            </tr>
            <tr className="border-b border-white">
              <td className="p-4 text-white border-r border-white">Submission Deadline: October 11, 2024</td>
              <td className="p-4 text-white">Paper Submission Deadline: Closed</td>
            </tr>
            <tr className="border-b border-white">
              <td className="p-4 text-white border-r border-white">Decision Notification: October 15, 2024</td>
              <td className="p-4 text-white">Decision Notification: Notification already sent</td>
            </tr>
            <tr className="border-b border-white">
              <td className="p-4 text-white border-r border-white">Early Bird Registration: October 15, 2024</td>
              <td className="p-4 text-white">Early Bird Registration: October 10, 2024</td>
            </tr>
            <tr className="border-b border-white">
              <td className="p-4 text-white border-r border-white">Camera Ready Submission: October 20, 2024</td>
              <td className="p-4 text-white">Camera Ready Submission: October 20, 2024</td>
            </tr>
            <tr>
              <td className="p-4 text-white border-r border-white">Late Registration Deadline: October 30, 2024</td>
              <td className="p-4 text-white">Late Registration Deadline: October 30, 2024</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ImportantTable