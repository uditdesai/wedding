import "./src/styles/global.css"

export const shouldUpdateScroll = ({
  prevRouterProps: { location },
  getSavedScrollPosition,
}) => {
  //   const currentPosition = getSavedScrollPosition(location)
  //   const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

  //   window.scrollTo(...(queriedPosition ||currentPosition || [0, 0]))

  if (
    location.href.includes("garba") ||
    location.href.includes("brides-pithi") ||
    location.href.includes("mehndi") ||
    location.href.includes("grooms-pithi") ||
    location.href.includes("wedding") ||
    location.href.includes("reception")
  ) {
    return "eventsContainer"
  } else if (location.href.includes("rsvp")) {
    return "rsvpContainer"
  } else {
    return [0, 0]
  }
}
