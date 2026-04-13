/* Shared application state. All modules read/write through DM.state to keep mutations traceable. */
window.DeltagMock = window.DeltagMock || {};

window.DeltagMock.state = {
  currentSort: "comments",
  currentCategory: "all",
  visibleCount: 16,
  currentModalIndex: -1,
  filteredData: window.DeltagMock.horingssvarData.slice(),
  ITEMS_PER_PAGE: 16,
  COMMENTS_PER_PAGE: 5,
  commentsVisible: 5
};
