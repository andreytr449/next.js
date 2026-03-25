import { expect, test } from '@playwright/test'

test.describe('Movies Page', () => {
  test('items page has correct title and visible items', async ({ page }) => {
    await page.goto('/en/items')

    await expect(page.locator('[data-testid="movie-card"]').first()).toBeVisible()
    await expect(page.locator('[data-testid="movie-card-title"]').first()).toBeVisible()
  })

  test.describe('Movie page', () => {
    test('click on movie navigates to details page', async ({ page }) => {
      await page.goto('/en/items')

      const firstCardTitle = await page.locator('[data-testid="movie-card-title"]').first().innerText()

      await page.locator('[data-testid="movie-card-link"]').first().click()

      await expect(page).toHaveURL(/\/en\/items\/\d+/)
      await expect(page.locator('h1')).toContainText(firstCardTitle)
    })
  })
})

test.describe('Language switching', () => {
  test('switch language from en to de changes url', async ({ page }) => {
    await page.goto('/en/items')

    await page.locator('[data-testid="language-switcher"]').click()
    await page.locator('[data-testid="lang-de"]').click()

    await expect(page).toHaveURL(/\/de\/items/)
  })

  test('page heading is in english', async ({ page }) => {
    await page.goto('/en/items')

    await expect(page.locator('h2').first()).toContainText('Discover the world of the best movies.')
  })

  test('page heading is in german', async ({ page }) => {
    await page.goto('/de/items')

    await expect(page.locator('h2').first()).toContainText('Entdecken Sie die Welt der besten Filme.')
  })
})
