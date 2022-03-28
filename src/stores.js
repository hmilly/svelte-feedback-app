import {writable} from "svelte/store"

export const FeedbackStore = writable([
    {
      id: 1,
      rating: 8,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor elit est,id condimentum arcu scelerisque eu. Cras suscipit venenatis elementum. Proin nec risus vel est lobortis semper.",
    },
    {
      id: 2,
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor elit est,id condimentum arcu scelerisque eu. Cras suscipit venenatis elementum. Proin nec risus vel est lobortis semper.",
    },
    {
      id: 3,
      rating: 9,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor elit est,id condimentum arcu scelerisque eu. Cras suscipit venenatis elementum. Proin nec risus vel est lobortis semper.",
    },
    {
      id: 4,
      rating: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor elit est,id condimentum arcu scelerisque eu. Cras suscipit venenatis elementum. Proin nec risus vel est lobortis semper.",
    },
    {
      id: 5,
      rating: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor elit est,id condimentum arcu scelerisque eu. Cras suscipit venenatis elementum. Proin nec risus vel est lobortis semper.",
    },
    {
      id: 6,
      rating: 7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor elit est,id condimentum arcu scelerisque eu. Cras suscipit venenatis elementum. Proin nec risus vel est lobortis semper.",
    },
  ])