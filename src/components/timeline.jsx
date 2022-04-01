import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import LoggedInUserContext from "../context/logged-in-user";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {
  //we need to get the logged in user's photos
  // on loading the photos, we need to use react skeleton
  // if we have photos, render them (create a post component)
  // if the user has no photos, tell them to create some photos
  const { user } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);

  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          <Skeleton count={3} width={640} height={500} className="mb-5" />
        </>
      ) : (
        photos.map((content) => <Post key={content.docId} content={content} />)
      )}
    </div>
  );
}
