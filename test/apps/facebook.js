describe("facebook(href, target)", () => {
  /* ANDROID */
  describe("when called for an android deep link", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.facebook(
        "https://www.facebook.com/566205457090856",
        ANDROID_TARGET
      );
      expect(deeplink).to.equal(
        "intent://#Intent;package=com.facebook.katana;scheme=fb://page/566205457090856?referrer=app_link;end"
      );
    });
  });

  /* IOS */
  describe("when called for an ios deep link", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.facebook(
        "https://facebook.com/566205457090856",
        IOS_TARGET
      );
      expect(deeplink).to.equal("fb://profile/566205457090856");
    });
  });
});
