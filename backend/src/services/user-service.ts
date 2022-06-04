import userRepo from '@repos/user-repo'
import { IUser } from '@models/user-model'
import { UserNotFoundError } from '@shared/errors'
import gdal from 'gdal'
import fs from 'fs'

/**
 * Get all users.
 *
 * @returns
 */
function getAll (): Promise<IUser[]> {
  const tifSolar = gdal.open('/src/assets/tifs/PVOUT.tif')
  const bands = tifSolar.bands.get(1)
  console.log('🚀 ~ file: user-service.ts ~ line 15 ~ getAll ~ bands', bands)

  return userRepo.getAll()
}

/**
 * Add one user.
 *
 * @param user
 * @returns
 */
function addOne (user: IUser): Promise<void> {
  return userRepo.add(user)
}

/**
 * Update one user.
 *
 * @param user
 * @returns
 */
async function updateOne (user: IUser): Promise<void> {
  const persists = await userRepo.persists(user.id)
  if (!persists) {
    throw new UserNotFoundError()
  }
  return userRepo.update(user)
}

/**
 * Delete a user by their id.
 *
 * @param id
 * @returns
 */
async function deleteOne (id: number): Promise<void> {
  const persists = await userRepo.persists(id)
  if (!persists) {
    throw new UserNotFoundError()
  }
  return userRepo.delete(id)
}

// Export default
export default {
  getAll,
  addOne,
  updateOne,
  delete: deleteOne
} as const
