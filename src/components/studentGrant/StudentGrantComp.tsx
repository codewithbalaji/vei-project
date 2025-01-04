export default function StudentGrantComp() {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="text-2xl font-semibold text-gray-800 text-center">
            Student travel grant to attend the INSPECT 2024 Conference.
          </h1>
  
          <p className="text-gray-700">
            The student travel grant is designed to provide financial assistance to students (based on the submitted paper quality) who demonstrate financial need and wish to attend the INSPECT 2024 conference.
          </p>
  
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Eligibility Criteria</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Applicant must be a full-time student at any educational institute.</li>
              <li>Applicant must demonstrate financial need.</li>
              <li>Applicant must be in good academic standing.</li>
              <li>Applicant must provide proof of acceptance or registration of INSPECT 2024.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Grant Amount</h2>
            <p className="text-gray-700">
              The grant amount will vary depending on available funds and the specific needs of each applicant. Grants may cover travel costs, accommodation, and other related expenses.
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Application Process</h2>
            <p className="text-gray-700">
              Complete the form here - <a href="#" className="text-blue-600 hover:underline">Click Here</a>
            </p>
            <p className="mt-4 mb-2">The following documents will be required to submit the above form:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Student ID of a recognized educational institute,</li>
              <li>documentation demonstrating financial need*,</li>
              <li>proof of acceptance/registration to INSPECT 2024</li>
            </ul>
            <p className="mt-4 text-sm italic">
              *Write a brief statement outlining the applicant's reasons (max 500 words) for seeking financial assistance and how attending the event will benefit their academic and professional development.
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Selection Process</h2>
            <p className="text-gray-700">
              A conference committee will review applications. The committee will assess applications based on criteria such as financial need, academic standing, and alignment with the grant program's goals. Grant recipients will be notified of their selection via email.
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Application Deadline:</h2>
            <p className="text-gray-700">30 September 2024</p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Contact Information</h2>
            <p className="text-gray-700">
              For inquiries or assistance regarding this grant, please contact at: inspect2024@iiitm.ac.in
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Note:</h2>
            <p className="text-gray-700">
              This grant is subject to the availability of funds and may be subject to change or discontinuation at the discretion of conference organizers.
            </p>
          </section>
        </div>
      </div>
    );
  }
  
  