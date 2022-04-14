package io.kotest.engine.spec.interceptor

import io.kotest.common.flatMap
import io.kotest.core.config.ExtensionRegistry
import io.kotest.core.spec.SpecRef
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.engine.spec.SpecExtensions

class PrepareSpecInterceptor(registry: ExtensionRegistry) : SpecRefInterceptor {

   private val extensions = SpecExtensions(registry)

   override suspend fun intercept(
      ref: SpecRefContainer,
      fn: suspend (SpecRefContainer) -> Result<Pair<SpecRefContainer, Map<TestCase, TestResult>>>
   ): Result<Pair<SpecRefContainer, Map<TestCase, TestResult>>> {
      return extensions
         .prepareSpec(ref.specRef.kclass)
         .flatMap { fn(ref) }
   }
}
