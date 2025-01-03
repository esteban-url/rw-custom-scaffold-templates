import type {
  DeleteUserExampleMutation,
  DeleteUserExampleMutationVariables,
  FindUserExamples,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserExample/UserExamplesCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

const DELETE_USER_EXAMPLE_MUTATION: TypedDocumentNode<
  DeleteUserExampleMutation,
  DeleteUserExampleMutationVariables
> = gql`
  mutation DeleteUserExampleMutation($id: Int!) {
    deleteUserExample(id: $id) {
      id
    }
  }
`

const UserExamplesList = ({ userExamples }: FindUserExamples) => {
  const [deleteUserExample] = useMutation(DELETE_USER_EXAMPLE_MUTATION, {
    onCompleted: () => {
      toast.success('UserExample deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteUserExampleMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userExample ' + id + '?')) {
      deleteUserExample({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
            <th>Date</th>
            <th>Active</th>
            <th>Floaty</th>
            <th>Inty</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userExamples.map((userExample) => (
            <tr key={userExample.id}>
              <td>{truncate(userExample.id)}</td>
              <td>{truncate(userExample.email)}</td>
              <td>{truncate(userExample.name)}</td>
              <td>{timeTag(userExample.date)}</td>
              <td>{checkboxInputTag(userExample.active)}</td>
              <td>{truncate(userExample.floaty)}</td>
              <td>{truncate(userExample.inty)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userExample({ id: userExample.id })}
                    title={'Show userExample ' + userExample.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserExample({ id: userExample.id })}
                    title={'Edit userExample ' + userExample.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userExample ' + userExample.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userExample.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserExamplesList
