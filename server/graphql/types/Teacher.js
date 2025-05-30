import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLError } from "graphql";
import { getSubjectByID } from "../../services/read/readSubject";
import { getClassroomByID } from "../../services/read/readClassroom";
const TeacherType = new GraphQLObjectType({
    name: "Teacher",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        code: { type: GraphQLString },
        subjects: {
            type: GraphQLList(SubjectType),
            resolve: async (parent) => {
                if (!parent.subjects || parent.subjects.length === 0) return [];
                try {
                    const resolvedSubjects = await Promise.all(
                        parent.subjects.map(getSubjectByID)
                    );
                    return resolvedSubjects;
                } catch (error) {
                    throw new GraphQLError(`${error.message} for teacher: ${parent.name}`, {
                        extensions: {
                            code: "BAD_USER_INPUT",
                        },
                    });
                }
            }
        },
        classes: {
            type: GraphQLList(ClassroomType),
            resolve: async (parent) => {
                if (!parent.classes || parent.classes.length === 0) return [];
                try {
                    const resolvedClassrooms = await Promise.all(
                        parent.classes.map(getClassroomByID)
                    );
                    return resolvedClassrooms;
                } catch (error) {
                    throw new GraphQLError(`${error.message} for teacher: ${parent.name}`, {
                        extensions: {
                            code: "BAD_USER_INPUT",
                        },
                    });
                }
            }
        }
    })
})