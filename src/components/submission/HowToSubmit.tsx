const HowToSubmit = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold text-red-600 mb-8">
        How to Submit paper in INSPECT-2024
      </h1>
      
      <div className="max-w-7xl space-y-6">
        <p className="text-justify">
          Prospective authors are encouraged to submit <span className="font-semibold">full</span> papers in PDF format not exceeding 6 pages in double-column includes all figures, tables, and references, 2000/25 USD per page (maximum 2 extra page). The paper must follow the standard IEEE template <a href="#" className="text-blue-600 hover:underline">link here</a>. Papers not compliant with the IEEE template including appropriate referencing or exceeding the page limit will be returned without review. Only original papers that have not been published or submitted for publication elsewhere will be considered. The paper must clearly indicate the research area, main results, and contributions. <span className="font-bold">All Accepted and Presented papers will be submitted for publication to IEEE Xplore, which is indexed with world's leading Abstracting & Indexing (A&I) databases (SCOPUS etc.)</span>
        </p>

        <p className="text-justify">
          Submission of a scientific paper is considered a commitment that, upon acceptance, authors will submit their camera-ready version for inclusion in the formal proceedings and will present the paper at the conference. Each accepted contribution must have at least one paid registration by the time the camera-ready paper is submitted for inclusion in the proceedings. INSPECT reserves the right to remove from IEEE Xplore papers and posters not presented at the symposium.
        </p>

        <p className="text-justify">
          For you to be able to access the submission system as an author, reviewer, program committee member, session chair, etc., you need to create an account on Microsoft CMT using the Submit button given below:
        </p>

        <div className="flex justify-center">
          <button className="bg-blue-600 text-white text-bold text-lg px-8 py-3 rounded-2xl hover:bg-blue-700 transition-colors">
            Submit a Paper
          </button>
        </div>

        <p>
          For the full call for papers click here: <a href="#" className="text-blue-600 hover:underline">Call For Papers</a>
        </p>

        <p>
          For IEEE templates, <a href="#" className="text-blue-600 hover:underline">Click here</a> or choose in <a href="#" className="text-blue-600 hover:underline">Latex</a> or in <a href="#" className="text-blue-600 hover:underline">.doc</a>
        </p>

        <p>
          Submission Deadline: <span className="font-semibold">Round 2 (October 11, 2024)</span>
        </p>

        <p className="text-justify">
          Accepted papers will be assigned to a regular technical session. All papers will go through a rigorous, single-blind reviewing process. At least one author of an accepted paper will have to register at the conference in order to submit the final version. All accepted papers presented at the conference will be published in the conference proceeding and submitted to IEEE Xplore for publication subject to their norms. They should satisfy the requirements given in the publication policy.
        </p>

        <p>
          The E-Copyright form must be submitted by the author or presenter at the time of registration.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">IEEE Policies</h2>
        <p className="text-justify">
          IEEE reserves the right to exclude a paper from distribution after the conference (e.g., by not including it in IEEE Xplore) if the paper is not presented at the conference. Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and IEEE will take action against any author who has engaged in either practice.
        </p>

        <p>
          For any clarifications regarding the paper submission guidelines please e-mail: <a href="mailto:inspect2024@iiitm.ac.in" className="text-blue-600 hover:underline">inspect2024@iiitm.ac.in</a>
        </p>
      </div>
    </div>
  );
};

export default HowToSubmit;
