import type {
  EditUserExampleById,
  UpdateUserExampleInput,
  UpdateUserExampleMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserExampleForm from 'src/components/UserExample/UserExampleForm'

export const QUERY: TypedDocumentNode<EditUserExampleById> = gql`
  query EditUserExampleById($id: Int!) {
    userExample: userExample(id: $id) {
      id
      email
      name
      date
      active
      floaty
      inty
    }
  }
`

const UPDATE_USER_EXAMPLE_MUTATION: TypedDocumentNode<
  EditUserExampleById,
  UpdateUserExampleMutationVariables
> = gql`
  mutation UpdateUserExampleMutation(
    $id: Int!
    $input: UpdateUserExampleInput!
  ) {
    updateUserExample(id: $id, input: $input) {
      id
      email
      name
      date
      active
      floaty
      inty
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  userExample,
}: CellSuccessProps<EditUserExampleById>) => {
  const [updateUserExample, { loading, error }] = useMutation(
    UPDATE_USER_EXAMPLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserExample updated')
        navigate(routes.userExamples())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateUserExampleInput,
    id: EditUserExampleById['userExample']['id']
  ) => {
    updateUserExample({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserExample {userExample?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserExampleForm
          userExample={userExample}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
