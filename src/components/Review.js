import React, { useState } from 'react';

const Review = () => {
  const data = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up...",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v...',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit...',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe...',
    },
  ];

  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((oldIndex) => (oldIndex - 1 + data.length) % data.length);
  };

  const nextReview = () => {
    setIndex((oldIndex) => (oldIndex + 1) % data.length);
  };

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    if (randomIndex === index) {
      randomIndex = (index + 1) % data.length;
    }
    setIndex(randomIndex);
  };

  const { id, name, job, image, text } = data[index];

  return (
    <div>
      {/* Heading */}
      <h2 id="review-heading">Our Reviews</h2>

      {/* Review container */}
      <div className="review">
        <img className="person-img" src={image} alt={name} />
        <p className="author" id={`author-${id}`}>{name}</p>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        {/* Buttons */}
        <div className="button-container">
          <button className="prev-btn" onClick={prevReview}>
            Previous
          </button>
          <button className="next-btn" onClick={nextReview}>
            Next
          </button>
        </div>
        <button className="random-btn" onClick={randomReview}>
          surprise me
        </button>
      </div>
    </div>
  );
};

export default Review;
