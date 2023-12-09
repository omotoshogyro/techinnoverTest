function getRandomNumber() {
  return Math.floor(Math.random() * 1000);
}
function getRandomImageUrl() {
  return `https://picsum.photos/800/800?random=${getRandomNumber()}`;
}
export function getRandomPeopleImageUrl() {
  return `https://picsum.photos/200/300?random=${getRandomNumber()}&category=people`;
}

function getRandomNumberOfLikes() {
  return Math.floor(Math.random() * 1000) + 10;
}

// Function to generate a random date posted
function getRandomDatePosted() {
  const daysAgo = Math.floor(Math.random() * 30) + 1; // Random number of days between 1 and 30
  return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
}

export const REELS_DATA = [
  {
    reelUrl:
      "https://v3.cdnpk.net/videvo_files/video/free/2016-10/large_watermarked/160929_124_London_Buses_1080p_preview.mp4",
    likes: "147k",
    comment: "2,465",
    username: "zoroarmy_edits",
    username_image: "",
    post_info: "What a failure...",
  },
  {
    reelUrl:
    "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    likes: "12.5k",
    comment: "25",
    username: "omotoshogyro",
    username_image: "",
    post_info: "What a failure...",
  },
  {
    reelUrl:
    "https://v3.cdnpk.net/videvo_files/video/free/2015-08/large_watermarked/Ao_Nang_Beach_Yoga_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.mp4",
    likes: "147k",
    comment: "2,465",
    username: "zoroarmy_edits",
    username_image: "",
    post_info: "What a failure...",
  },
  {
    reelUrl:
    "https://v1.cdnpk.net/videvo_files/video/premium/getty_43/large_watermarked/istock-686737434_preview.mp4",
    likes: "147k",
    comment: "2,465",
    username: "zoroarmy_edits",
    username_image: "",
    post_info: "What a failure...",
  },
  {
    reelUrl:
    "https://v3.cdnpk.net/videvo_files/video/free/video0474/small_preview/_import_61e8f017b3b2c5.29118448.webm",
    number_of_comments: 20,
    likes: "12.5k",
    comment: "25",
    username: "omotoshogyro",
    username_image: "",
    post_info: "What a failure...",
  },
  {
    reelUrl: "https://v3.cdnpk.net/videvo_files/video/premium/video0234/small_watermarked/02_Selo_zakat_II_24_pick_str_preview.webm",
    likes: "147k",
    comment: "2,465",
    username: "zoroarmy_edits",
    username_image: "",
    post_info: "What a failure...",
  },
];

export const SEARCH_REELS = [
  {
    tags: [
      {
        height: 125,
        type: "video",
        fileUrl:
          "https://v3.cdnpk.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4",
      },
      {
        height: 125,
        fileUrl: getRandomImageUrl(),
      },
      {
        height: 250,
        type: "video",
        fileUrl:
          "https://v3.cdnpk.net/videvo_files/video/free/2016-10/large_watermarked/160929_124_London_Buses_1080p_preview.mp4",
      },
      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },

      {
        height: 125,
        fileUrl: getRandomImageUrl(),
      },
      {
        height: 250,
        fileUrl: getRandomImageUrl(),
      },
    ],
  },
  {
    tags: [
      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },
      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },
      {
        height: 125,
        fileUrl: getRandomImageUrl(),
      },
      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },
      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },
      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },

      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },
      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },
    ],
  },
  {
    tags: [
      {
        height: 250,

        fileUrl: getRandomImageUrl(),
      },
      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },

      {
        height: 125,

        fileUrl: getRandomImageUrl(),
      },
      {
        height: 250,
        fileUrl: getRandomImageUrl(),
      },
      {
        height: 125,
        type: "video",
        fileUrl:
          "https://v5.cdnpk.net/videvo_files/video/premium/partners0652/large_watermarked/1697813_preview.mp4",
      },

      {
        height: 125,
        fileUrl: getRandomImageUrl(),
      },
    ],
  },
];

export const STORY_DATAS = [
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "zoroarmy_edits",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "okiki",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "zoroarmy_edits",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "okiki",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "zoroarmy_edits",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "okiki",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "zoroarmy_edits",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "okiki",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "okiki",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "zoroarmy_edits",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "okiki",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "zoroarmy_edits",
  },
  {
    storyImage: getRandomPeopleImageUrl(),
    username: "okiki",
  },
];

export const POST_DATAS = [
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: 139,
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    number_of_comments: 20,
    date_posted: "1 day ago",
    height: 375,
    type: "video",
    audioMutable: true,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: 139,
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url:
      "https://v3.cdnpk.net/videvo_files/video/free/2016-10/large_watermarked/160929_124_London_Buses_1080p_preview.mp4",
    number_of_comments: 20,
    date_posted: "1 day ago",
    height: 375,
    type: "video",
    audioMutable: true,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: 139,
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url:
      "https://v1.cdnpk.net/videvo_files/video/premium/getty_57/large_watermarked/istock-928149994_preview.mp4",
    number_of_comments: 20,
    date_posted: "1 day ago",
    height: 375,
    type: "video",
    audioMutable: true,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: 139,
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url:
      "https://v3.cdnpk.net/videvo_files/video/free/2015-08/large_watermarked/Ao_Nang_Beach_Yoga_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.mp4",
    number_of_comments: 20,
    date_posted: "1 day ago",
    height: 375,
    type: "video",
    audioMutable: true,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: 139,
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: "https://v1.cdnpk.net/videvo_files/video/premium/getty_43/large_watermarked/istock-686737434_preview.mp4",
    number_of_comments: 20,
    date_posted: "1 day ago",
    height: 375,
    type: "video",
    audioMutable: true,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: 139,
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: "https://v3.cdnpk.net/videvo_files/video/free/video0474/small_preview/_import_61e8f017b3b2c5.29118448.webm",
    number_of_comments: 20,
    date_posted: "1 day ago",
    height: 375,
    type: "video",
    audioMutable: true,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
  {
    username: "Gyroscope",
    profile_image: getRandomImageUrl(),
    number_of_likes: getRandomNumberOfLikes(),
    post_info:
      "Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more",
    post_url: getRandomImageUrl(),
    number_of_comments: 20,
    date_posted: getRandomDatePosted(),
    height: 375,
  },
];
