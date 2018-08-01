import { getApp } from "../lib";

describe("getApp()", () => {
  describe("when called with a full https URL", () => {
    it("should return the proper app name", () => {
      let app = getApp("https://www.twitter.com");
      expect(app).to.equal("twitter");

      app = getApp("https://www.instagram.com");
      expect(app).to.equal("instagram");
    });
  });

  describe("when called with a full http URL", () => {
    it("should return the proper app name", () => {
      let app = getApp("http://www.twitter.com");
      expect(app).to.equal("twitter");

      app = getApp("http://www.instagram.com");
      expect(app).to.equal("instagram");
    });
  });

  describe("when called with a non www URL", () => {
    it("should return the proper app name", () => {
      let app = getApp("https://facebook.com");
      expect(app).to.equal("facebook");

      app = getApp("https://medium.com");
      expect(app).to.equal("medium");
    });
  });

  describe("when called with a non protocol URL", () => {
    it("should return the proper app name", () => {
      let app = getApp("snapchat.com");
      expect(app).to.equal("snapchat");

      app = getApp("reddit.com");
      expect(app).to.equal("reddit");
    });
  });
});
