import React, { useState, useRef } from "react";
import Logo from "../../images/logo/Logo.jpg";

function InstagramGallery({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const videoRefs = useRef({});

  // Handlers for navigating Lightbox
  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = items.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setSelectedItem(items[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = items.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % items.length;
    setSelectedItem(items[nextIndex]);
  };

  // Video hover play handlers
  const handleMouseEnter = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch((err) => console.log("Autoplay block:", err));
    }
  };

  const handleMouseLeave = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Dummy comments for the Instagram sidebar
  const getMockComments = (id) => {
    const commentsList = [
      [
        { user: "amit_fitness", text: "Insane strength! Need to try this routine. 🔥", time: "2h" },
        { user: "coach_deepak", text: "Form is perfect here. Keep crushing it! 🙌", time: "4h" },
        { user: "sneha.lifts", text: "This gym looks amazing. Setting goals! 💪", time: "6h" }
      ],
      [
        { user: "singh_beast", text: "Pure motivation right here! 💯", time: "1h" },
        { user: "rahul_fitness", text: "Which protein do you guys recommend?", time: "3h" },
        { user: "rohit_lifting", text: "Weight Wearhouse gym is elite! 🏋️‍♂️", time: "5h" }
      ],
      [
        { user: "iron_arjun", text: "Consistency always wins. Let's go!", time: "45m" },
        { user: "priya_yoga", text: "Mind-muscle connection is real. 🙏", time: "2h" },
        { user: "karan_fit", text: "That workout circuit is brutal but so good! 💦", time: "8h" }
      ]
    ];
    return commentsList[id % commentsList.length];
  };

  return (
    <div className="w-full">
      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-6 md:gap-8 md1000:grid-cols-2 min540:grid-cols-1">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            onMouseEnter={item.type === "video" ? () => handleMouseEnter(item.id) : null}
            onMouseLeave={item.type === "video" ? () => handleMouseLeave(item.id) : null}
            className="aspect-square relative overflow-hidden bg-black rounded-xl shadow-lg cursor-pointer group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Media rendering */}
            {item.type === "image" ? (
              <img
                src={item.src}
                alt="post"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full relative">
                <video
                  ref={(el) => (videoRefs.current[item.id] = el)}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Reel Camera icon overlay */}
                <div className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15.75 10.5 4.72-2.36a.75.75 0 011.03.67v6.38a.75.75 0 01-1.03.67l-4.72-2.36M3.75 9h12.75M3.75 15h12.75"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Hover Backdrop Overlay */}
            <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-10 text-white font-bold z-20">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-heart text-[2.2rem] text-white"></i>
                <span className="text-[1.8rem]">{item.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-comment text-[2.2rem] text-white"></i>
                <span className="text-[1.8rem]">{item.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999999] flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 text-white text-[3rem] hover:text-[#FFD700] transition-colors duration-200 z-[99999999]"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-[4rem] hover:text-[#FFD700] transition-colors duration-200 bg-black/30 w-[60px] h-[60px] rounded-full flex items-center justify-center z-[99999999] hover:bg-black/60 hidden md:flex"
          >
            <i className="fa-solid fa-chevron-left -ml-1"></i>
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-[4rem] hover:text-[#FFD700] transition-colors duration-200 bg-black/30 w-[60px] h-[60px] rounded-full flex items-center justify-center z-[99999999] hover:bg-black/60 hidden md:flex"
          >
            <i className="fa-solid fa-chevron-right -mr-1"></i>
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col md:flex-row max-w-[1050px] w-full max-h-[85vh] md:h-[600px] bg-white rounded-2xl overflow-hidden shadow-2xl animate-[scaleUp_0.25s_ease-out]"
          >
            {/* Left Column: Media display */}
            <div className="flex-[3] bg-black flex items-center justify-center relative min-h-[300px] md:min-h-0 md:h-full">
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt="selected_img"
                  className="w-full h-full object-contain max-h-[40vh] md:max-h-full"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain max-h-[40vh] md:max-h-full"
                />
              )}
            </div>

            {/* Right Column: Instagram-style sidebar details */}
            <div className="flex-[2] flex flex-col h-[400px] md:h-full bg-white border-l border-gray-200">
              {/* Header profile info */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <img
                    src={Logo}
                    alt="profile"
                    className="w-16 h-16 rounded-full border border-gray-200 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-[1.5rem] font-bold text-black leading-tight">
                        weightwearhousegym
                      </p>
                      {/* Instagram verification badge */}
                      <svg
                        aria-label="Verified"
                        className="w-[1.4rem] h-[1.4rem] text-[#0095f6] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <polygon fillRule="evenodd" points="12 2 14.887 5.097 18.529 4.316 19.31 7.957 22.903 8.845 21.848 12.38 23.848 15.38 20.848 17.38 19.848 20.915 16.255 21.803 15.474 25.444 11.832 24.664 8.945 27.761 6.058 24.664 2.416 25.444 1.635 21.803 -1.957 20.915 -0.957 17.38 -3.957 15.38 -1.957 12.38 -3.012 8.845 0.58 7.957 1.362 4.316 5.004 5.097" />
                        <polygon fill="#fff" points="9.75 16.25 5.5 12 6.75 10.75 9.75 13.75 17.25 6.25 18.5 7.5" />
                      </svg>
                    </div>
                    <p className="text-[1.2rem] text-[#646464] font-medium">
                      Weight Wearhouse Gym
                    </p>
                  </div>
                </div>
                <button className="text-[1.4rem] font-bold text-[#0095f6] hover:text-[#00376b] transition-colors duration-200">
                  Follow
                </button>
              </div>

              {/* Scrollable feed comments & caption */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5 flex flex-col bg-white">
                {/* Author post caption */}
                <div className="flex gap-4 items-start">
                  <img
                    src={Logo}
                    alt="profile"
                    className="w-12 h-12 rounded-full border border-gray-100 object-cover mt-1 flex-shrink-0"
                  />
                  <div>
                    <span className="text-[1.4rem] font-bold text-black mr-2">
                      weightwearhousegym
                    </span>
                    <span className="text-[1.4rem] text-black font-medium leading-relaxed">
                      {selectedItem.caption}
                    </span>
                    <p className="text-[1.1rem] text-[#8e8e8e] font-semibold mt-2 uppercase">
                      2d
                    </p>
                  </div>
                </div>

                {/* Render Mock Comments */}
                {getMockComments(selectedItem.id).map((comment, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    {/* Unique avatar letters for mock users */}
                    <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[1.2rem] font-bold text-gray-600 flex-shrink-0 mt-1 uppercase">
                      {comment.user.substring(0, 2)}
                    </div>
                    <div>
                      <span className="text-[1.4rem] font-bold text-black mr-2">
                        {comment.user}
                      </span>
                      <span className="text-[1.4rem] text-black font-medium leading-relaxed">
                        {comment.text}
                      </span>
                      <div className="flex items-center gap-4 text-[1.1rem] text-[#8e8e8e] font-semibold mt-2">
                        <span>{comment.time}</span>
                        <button className="hover:text-black">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Post Activity actions */}
              <div className="p-5 border-t border-gray-100 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-5 text-black">
                    <button className="hover:opacity-60 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-9 h-9 text-black hover:text-[#ff3040]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                    <button className="hover:opacity-60 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785 1.128 1.128 0 00.31 1.55 4.512 4.512 0 003.557-.705c.371-.24.846-.356 1.277-.24A13.626 13.626 0 0012 20.25z"
                        />
                      </svg>
                    </button>
                    <button className="hover:opacity-60 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="hover:opacity-60 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-9 h-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-[1.4rem] font-bold text-black">
                  Liked by {selectedItem.likes} others
                </p>
                <p className="text-[1.1rem] text-[#8e8e8e] font-semibold mt-1 uppercase">
                  October 24, 2023
                </p>
              </div>

              {/* Form Input for comment */}
              <div className="p-4 border-t border-gray-100 flex items-center justify-between gap-4 bg-white">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full text-[1.4rem] text-black bg-transparent outline-none py-2 font-medium"
                />
                <button className="text-[1.4rem] font-bold text-[#0095f6] hover:text-[#00376b] px-2 transition-colors duration-200">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstagramGallery;
