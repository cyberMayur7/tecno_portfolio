const ResumeButton = () => {
  const handleDownload = () => {
    console.log("Resume Downloaded"); // future analytics
  };

  return (
    <a
      href="/resume.pdf"
      download
      onClick={handleDownload}
      className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition"
    >
      Download Resume
    </a>
  );
};

export default ResumeButton;
