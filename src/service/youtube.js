import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: {
        key: key,
        part: "snippet",
        maxResults: 25,
      },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        chart: "mostPopular",
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        type: "video",
        q: `${query}`,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
