import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utility/url";
import { data } from "react-router-dom";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getallcourse: build.query({
      query: () => "/course/allcourse",
      providesTags: ["course"],
    }),
    addCourse: build.mutation({
      query: (data) => ({
        url: "/course/addcourse",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        const tempid = crypto.randomUUID();

        const patchResult = dispatch(
          courseApi.util.updateQueryData("getallcourse", undefined, (draft) => {
            draft.data.push({ ...data, _id: tempid });
          }),
        );
        try {
          const { data } = await queryFulfilled;

          dispatch(
            courseApi.util.updateQueryData(
              "getallcourse",
              undefined,
              (draft) => {
                const index = draft.data.findIndex((v) => v._id === tempid);

                draft.data[index] = data.data;
              },
            ),
          );
        } catch {
          patchResult.undo();

          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['Post']))
           */
        }
      },
      // invalidatesTags: ['course']
    }),
    updateCourse: build.mutation({
      query: (data) => ({
        url: `/course/updatecourse/${data.get("_id")}`,
        method: "PUT",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          courseApi.util.updateQueryData("getallcourse", undefined, (draft) => {
            const index = draft.data.findIndex(
              (v) => v._id === data.get("_id"),
            );

            if (index !== -1) {
              draft.data[index] = {
                _id: data.get("_id"),
                categories_id: data.get("categories_id"),
                name: data.get("name"),
                desciption: data.get("desciption"),
                course_img:
                  typeof data.get("course_img") === "string"
                    ? data.get("course_img")
                    : URL.createObjectURL(data.get("course_img")),
              };
            }
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();

          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['Post']))
           */
        }
      },
      // invalidatesTags: ['course']
    }),
    deletCourse: build.mutation({
      query: (_id) => ({
        url: `/course/deletecourse/${_id}`,
        method: "DELETE",
      }),
      async onQueryStarted(_id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          courseApi.util.updateQueryData("getallcourse", undefined, (draft) => {
            const index = draft.data.findIndex((v) => v._id === _id);

            if (index !== -1) {
              draft.data.splice(index, 1);
            }
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();

          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['Post']))
           */
        }
      },
      // invalidatesTags: ['course']
    }),
    updateCourseStauts: build.mutation({
      query: (data) => ({
        url: `/course/updateCouserStauts/${data.get("_id")}`,
        method: "PUT",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          courseApi.util.updateQueryData("getallcourse", undefined, (draft) => {
            const index = draft.data.findIndex((v) => v._id === data._id);

            if (index !== -1) {
              draft.data[index] = data.data;
            }
          }),
        );
        try {
          await queryFulfilled;
        } catch { 
          patchResult.undo();

          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['Post']))
           */
        }
      },
      // invalidatesTags: ['course']
    }),
  }),
});

export const {
  useGetallcourseQuery,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useDeletCourseMutation,
  useUpdateCourseStautsMutation,
} = courseApi;
